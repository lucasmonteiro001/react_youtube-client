import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

global.jQuery = require('jquery');
require('bootstrap');


const API_KEY = "AIzaSyA6sKxGO33AaP1o3bkoLuaXr-Tq3d42BgY";

class Container extends Component {

    constructor() {
        super();

        this.state = {
            search: '',
            videos: []
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {

            this.setState({ videos });
        });
        
        this.onChangeSearch = this.onChangeSearch.bind(this);

    }

    onChangeSearch(val) {

        this.setState({
            search: val
        });

        YTSearch({key: API_KEY, term: this.state.search}, videos => {

            this.setState({ videos });
        });
    }

    render() {

        return (
            <div>
                <SearchBar value={this.state.search} onChange={this.onChangeSearch}/>
                <VideoList videos={this.state.videos}/>
            </div>

        )
    }


}

ReactDOM.render(
  <Container/>,
  document.getElementById('root')
);