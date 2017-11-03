const [ issues ] = require("./data");

const pipe = ( ...rest ) => x => rest.reduce( ( arg, func ) => func( arg ), x );


function filterByProperty( array, property, value ) {
    return array.filter( object => object[property] === value );
}


// const filter = ( fn, array ) => array.filter( fn );
const getValueForProperty = ( object, property ) => object[property];

function leftApplication( f, ...fixedArgs ) {
    return function( ...restArgs ) {
        return f( ...fixedArgs, ...restArgs )
    }
}

function filter( array ) {
    return function( property ){
        return function( value ) {
            return array.filter( object => object[property] === value );
        }
    }
}

// ES6 style
const filterCurrying = ( array ) => ( property ) => ( value ) =>
    array.filter( object => object[property] === value );

console.log( filter( issues )( "status" )( "Resolved" ) );
console.log( filterCurrying( issues )( "sprint" )( "2" ) );
