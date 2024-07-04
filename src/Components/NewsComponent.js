import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsComponent extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source,mode} = this.props;
        // console.log("mode- "+mode);
        let d = new Date(date);
        // console.log(d);
        return (
            <>
                <div className="card my-3" style={{ width: "20rem", height: "25rem" }}>
                    <img src={imageUrl == null ? "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg" : imageUrl} className="card-img-top" alt="Img loading...." />
                    <div className={`card-body bg-${mode==='dark'?'dark':'light'}`}>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%'}}>
                            {source}
                        </span>
                        <h5 className={`card-title text-${mode === 'dark'?'light':'dark'}`}>{title!==undefined && title.length > 40 ? title.slice(0, 30) + "..." : title}</h5>
                        <p className={`card-text text-${mode === 'dark'?'light':'dark'}`}>{description && description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
                        <p className={`card-text text-${mode=== 'dark'?'light':'dark'}`}><small className="text-body-secondary">By {author} on {`${d.getDay()}:${d.getMonth()}:${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`}</small></p>
                        <Link rel='noreferrer' to={newsUrl} target='_blank' className={`btn btn-sm btn-${mode === 'dark'?'success':'dark'}`}>Read More</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsComponent
