module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/649a63bf8e78455f86f9024f976312e3?v=4ec4438b4fb74f77a6fe0d5929c7cdd3"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/4141ec12597c4987b3ad039e51b5b7a3?v=32041115a25d4bbf8c2b1be9d07d2441"
            }
        }
    ],
}
