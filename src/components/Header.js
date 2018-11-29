import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
// UIs
import { FaTwitter, FaGithub } from "react-icons/fa"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 0 3rem;

  @media (max-width: 780px) {
    padding: 0 1.5rem;
  }
`

const LinkToMe = styled(Link)`
  font-family: "Dank Mono", sans-serif;
  font-size: 3rem;

  &,
  &:visited,
  &:hover,
  &:active {
    color: white;
    text-decoration: none;
  }
`

const SocialContainer = styled.div`
  display: flex;

  a {
    opacity: 0.75;

    &,
    &:visited {
      color: #fff;
    }

    &:hover {
      opacity: 1;
    }

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }

  svg {
    display: block;
  }
`

function Header({ me }) {
  return (
    <StyledHeader>
      <LinkToMe to="/">Alex Luong</LinkToMe>

      <SocialContainer>
        <a href={me.twitter} className="social-twitter" aria-label="twitter">
          <FaTwitter size={22} />
        </a>
        <a href={me.github} className="social-github" aria-label="github">
          <FaGithub size={22} />
        </a>
      </SocialContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  me: PropTypes.shape({
    github: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        me: contentfulAuthor(username: { eq: "alex" }) {
          github
          twitter
        }
      }
    `}
    render={data => <Header {...props} me={data.me} />}
  />
)
