import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBF7nfopTuUYnVH3vk1oZffcCMagDzwxI0'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards')
  }


  videoSearch(term) {
    YTSearch({  key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
         selectedVideo: videos[0]
      });
    })
  }
  render() {

    const videoSearch = _.debounce(term => {this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'))