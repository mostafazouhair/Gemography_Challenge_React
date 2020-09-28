import React, { Component } from 'react';
import dayjs from "dayjs";
import { Container } from 'react-bootstrap';
import Repository from './Repository'
import { Waypoint } from 'react-waypoint';
import images from './../images.png';



class Repositories extends Component {

    state = {
        isLoading: false,
        repos: [],
        error: null,
        currentPage: 1
      };

      getApiUrl = () => {
        const date = dayjs()
          .subtract(30, "day")
          .format("YYYY-MM-DD");
    
        return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${this.state.currentPage}`;
      };

      getRepos = () => {
        this.setState({ isLoading: true });
    
        fetch(this.getApiUrl())
          .then(response => response.json())
          .then(({ items }) => {
            this.setState(({ repos, currentPage }) => ({
              repos: [...repos, ...items],
              isLoading: false,
              currentPage: currentPage + 1
            }));
          })
    
          .catch(error => this.setState({ error, isLoading: false }));
      };
    



    render() {

        const { isLoading, repos, error } = this.state;

        return (
            <Container>
                <div> 
                    <nav className="navbar navbar-dark bg-primary mb-3">
                        <div className="navbar-brand font-weight-bold" href="#">
                            <img src={images} width="30"  height="30" className="d-inline-block align-center mr-2"  alt=""/>
                            Gemography Challenge: React Js
                        </div>
                    </nav>
                
                    {repos.map(
                        ({
                            id,
                            name,
                            owner,
                            description,
                            stargazers_count,
                            open_issues,
                            created_at
                    }) => (
                        <Repository
                            key={id}
                            isLoading={isLoading}
                            name={name}
                            owner={owner}
                            description={description}
                            stargazers_count={stargazers_count}
                            open_issues={open_issues}
                            created_at={created_at}
                            error={error} />
                    ))}
                </div>


                <Waypoint onEnter={this.getRepos} />

                {isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>
                )}
            </Container>
        );
    }
}


export default Repositories;

