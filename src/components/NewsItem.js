import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"87%", zIndex:'1'}}>
                                {source}
                            </span>
                    <img src={imageUrl} height="180px" width="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                           
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-success">By:{!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem;
