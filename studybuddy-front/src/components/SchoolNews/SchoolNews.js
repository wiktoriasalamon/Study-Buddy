import React from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleImage, Articles, Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';
import { useQuery, gql } from "@apollo/client";

const query = gql`
        {
          allArticles { 
            title
            content
            image {
              url
              alt
            }
          } 
        }`;

const SchoolNews = () => {
  const { loading, error, data } = useQuery(query);

  return (
      <Wrapper>
        <Title>Gazetka szkolna</Title>
        <Articles>
            {loading && <h2>Loading...</h2>}
            {(!loading && !error)
                ? data.allArticles.map(({title, content, image: {url, alt}}) => (
                        <Article key={title}>
                            <ArticleImage>
                                <img src={url} alt={alt} />
                            </ArticleImage>
                            <div>
                                <h3>{title}</h3>
                                <p>{content}</p>
                            </div>
                        </Article>
                    ))
                : null
            }
            {error && (<h2>Error! Try again.</h2>)}
        </Articles>
      </Wrapper>
  );
}

SchoolNews.propTypes = {};

export default SchoolNews;
