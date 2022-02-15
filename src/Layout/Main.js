import React, {Component} from "react";
import {Movies} from "../Component/Movies";
import {Search} from "../Component/Search";
import {Preloader} from "../Component/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})

        // return fetch(
        //     `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        //         type !== "all" ? `&type=${type}` : ""
        //     }`
        // )
        //     .then((response) => response.json())
        //     .then((data) => {
        //         return this.setState({
        //             movies: data.Search,
        //             loading: false,
        //         });
        //     });
        return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => this.setState({movies: data.Search, loading: false}))
    }

    render(){
        const{movies, loading} = this.state

        return <main className = 'container content'>
            <Search searchMovies = {this.searchMovies} />
            {
                loading ? <Preloader /> : (<Movies movies={movies}/>)
            }

        </main>
    }
}
export {Main}