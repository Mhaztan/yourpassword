// src/pages/SecurityNewsPage.jsx
import '../otherStyles/SecurityNewsPage.css';

function SecurityNewsPage() {
    // Placeholder news items for now. In a real-world application you'd fetch this from an API or RSS feed.
    const newsItems = [
          {
            title: "New Phishing Campaign Targets Users",
             content: "A new sophisticated phishing campaign has been detected targeting users. Be extra careful about unusual emails or messages, and do not click on any links unless you are absolutely sure they are from a trusted source. Always check the sender of any email you receive.",
             source: "Security Blog",
             date: "2024-08-18"
          },
          {
              title: "Data Breach at Major Retailer",
              content: "A major retailer announced a data breach that exposed customers' personal data. If you have bought anything on that retailer please change your password. If you have used the same password in other places, please change them too.",
               source: "Tech News",
              date: "2024-08-17"
           },
         {
             title: "Browser Security Update Released",
            content: "A new security update for the most popular browsers has been released. Please update to the latest version to fix several security vulnerabilities.",
              source: "Tech News",
               date: "2024-08-16"
         }
    ];

    return (
        <div className="security-news-page">
            <h1 className="security-news-title">Security News & Updates</h1>
            <div className="security-news-content">
                 {newsItems.map((item, index) => (
                    <article key={index} className="news-item">
                       <h2 className="news-item-title">{item.title}</h2>
                       <p className="news-item-content">{item.content}</p>
                         <p className="news-item-source">
                           Source: {item.source} - Date: {item.date}
                         </p>
                    </article>
                  ))}
            </div>
         </div>
    );
}

export default SecurityNewsPage;