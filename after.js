
// Filter with Currying 
function filter( array ) {
    return function( property ){
        return function( value ) {
            return array.filter( object => object[property] === value );
        }
    }
}

// Filter with Currying ES6 Style
const filterCurrying = ( array ) => ( property ) => ( value ) =>
    array.filter( object => object[property] === value );

// console.log( filter( issues )( "status" )( "Resolved" ) );
// console.log( filterCurrying( issues )( "sprint" )( "2" ) );

// filter with partial application and composition
function leftApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs )
    }
}

const pipe = ( ...rest ) => x => rest.reduce( ( arg, func ) => func( arg ), x );

const customFilter = ( fn, array ) => array.filter( fn );
const getValueForProperty = ( property ) => ( object ) => object[property];
const filterByProperty = ( value ) => ( property ) => property === value;

const filterCriterion = pipe( getValueForProperty( "status" ), filterByProperty( "Resolved" ) );
const complicatedFilter = leftApplication( customFilter, filterCriterion );

// console.log( complicatedFilter( issues ) );

function getHeader() {
    return `
    <br>
    <tr>
        <th>Id</th>
        <th>Type</th>
        <th>Name</th>
        <th>Sprint id</th>
        <th>createdBy</th>
        <th>asignee</th>
        <th>description</th>
        <th>status</th>
        <th>tasks</th>
        <th>comments</th>
        <th>updatedAt</th>
        <th>createdAt</th>
    </tr>`;
}

 const getData = ( array ) => array.map( item => 
    `<tr>
            <td>${item.id}</td>
            <td>${item.type}</td>
            <td>${item.name}</td>
            <td>${item.sprint}</td>
            <td>${item.id}</td>
            <td>${item.createdBy}</td>
            <td>${item.description}</td>
            <td>${item.status}</td>
            <td>${item.tasks}</td>
            <td>${item.comments}</td>
            <td>${item.updatedAt}</td>
            <td>${item.createdAt}</td>
        </tr>`
);


function partialApplicationDisplay( render, containerName ) {
    const filteredDiv = document.querySelector( containerName );
    filteredDiv.innerHTML += typeof render === "object" ? render.join("") : render;
}

const compose = ( f, g ) => ( x ) => f( g( x ) );

const displayHeader = leftApplication( partialApplicationDisplay, getHeader() );
displayHeader(".filter-table");

const displayBody = leftApplication( partialApplicationDisplay, getData(issues) );
displayBody(".filter-table");


// Display with currying
const display = (render) => (id) => {
    const filteredDiv = document.querySelector( id );
    filteredDiv.innerHTML += typeof render === "object" ? render.join("") : render;
}

display( getHeader() )( ".filter-table" );
display( getData( issues ) )( ".filter-table" );


