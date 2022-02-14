function Movie(props){
const{Tittle, Year, imdbID, Type, Poster } = props;
return <div id={imdbID} className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Poster}/>
    </div>
    <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{Tittle}</span>
        <p>{Year} <span className="right">{Type}</span></p>
    </div>
</div>
}
export {Movie}