import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux';
import 'react-select/dist/react-select.css'
import { changeSelection } from '../../AC';

class SelectFilter extends Component {
    // state = {
    //     selected: []
    // }

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const { selected, articles } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
  articles: state.articles,
  selected: state.filters.selected
}), {changeSelection})(SelectFilter)
