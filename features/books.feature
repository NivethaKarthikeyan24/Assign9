Feature: BooksandAuthors
    Scenario Outline: Correct non-zero number of books found by author
        Given I have the following books in the store
            | title                                | author      |
            | The devil in the White city          | Erik Larson |
            | The Lion, the Witch and the Wardrobe | C.S. Lewis  |
            | In the Garden of Beasts              | Erik Larson |
        When I search for books by author '<author>'
        Then I find <numberOfBooks> books
      

          Examples:
            | author      | numberOfBooks |
            | Erik Larson | 2            |
            | C.S. Lewis  | 1            |
            | J.K. Rowling| 0            |