import {createSelector} from 'reselect';

const articlesGetter = state => state.articles
const filtersGetter = state => state.filters

export const filtratedArticlesSelector = createSelector(
  articlesGetter,
  filtersGetter,
  (articles, filters) => {
    const { selected, dateRange: {from, to} } = filters
    console.log('---', 'recalculating filters');

    return articles.filter(article => {
      const published = Date.parse(article.date)
      return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
  })
