import NewsPage from "../../../pages/News/NewsPage";

describe('Beckett News Page', () => {

  beforeEach(() => {
    NewsPage.visit()
    NewsPage.verifyPageLoaded()
  })

  it('should show latest news cards', () => {
    NewsPage.getLatestNewsCards()
      .should('have.length.greaterThan', 0)
  })

  it('should validate news card structure', () => {
    NewsPage.validateNewsCardStructure()
  })

  it('should open a news article', () => {
    NewsPage.clickLatestNewsByIndex(0)
    NewsPage.verifyArticlePage()
  })

  it('should show sidebar content', () => {
    NewsPage.verifySidebarVisible()
    NewsPage.verifyNewChecklistsVisible()
  })

})

