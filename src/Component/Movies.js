import {Movie} from './Movie'

function Movies (props) {
const{movies = []} = props;

return <div className="movies">
    {movies.length ? movies.map((movie) => {
       return <Movie key={movie.imdbID} {...movie}/>
    }) : <h4>Nothing has been found</h4>
    }
</div>

}
export {Movies}