import './Country.css'
const Country = ({country}) => {
    const {name, flags, continents, population, area} =country;
    return (
        <div className="country">
            <h3> Name:{name.common} </h3>
            <img src={flags.png} alt="" />
            <h3> Continets: {continents} </h3>
            <h3> Population: {population} </h3>
            <h3> Area: {area} </h3>
        </div>
    );
};

export default Country;
