import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
        document.title = "Newscreed-" + this.props.category;
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=30400ec924b640ec95b703ff4043275c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(10);
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState(this.state.page + 1);
        this.updateNews();
    }
    handlePreviousClick = async () => {
        this.setState(this.state.page - 1);
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=30400ec924b640ec95b703ff4043275c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
                });
    }
    render() {
        return (
            <>
                <h1 className="text-center" style={{marginTop:"80px"}}> Newscreed - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage ? element.urlToImage : "data:image/png;base64,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"} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
