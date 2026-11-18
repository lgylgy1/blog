export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    categories: string;
    tags: string;
    friends: string;
    about: string;
    archives: string;
    search: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    /** Optional until v8, so older locale files still type-check. */
    tableOfContents?: string;
    readingTime: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
    emptyTitle: string;
    emptyDesc: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
  };
  pages: {
    tagTitle: string;
    tagDesc: string;

    tagsTitle: string;
    tagsDesc: string;

    postsTitle: string;
    postsDesc: string;

    categoriesTitle: string;
    categoriesDesc: string;

    friendsTitle: string;
    friendsDesc: string;

    archivesTitle: string;
    archivesDesc: string;

    searchTitle: string;
    searchDesc: string;
  };
  a11y: {
    skipToContent: string;
    /** Optional until v8, so older locale files still type-check. */
    skipTableOfContents?: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
    switchLanguage: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}
