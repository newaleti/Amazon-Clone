import React from "react";
import "./BestSellerBook.css"; 
const BestSellerBook = () => {
  const bestSellersData = [
    {
      id: 1,
      title: "Atomic Habits",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykCs2M0JfIyQVx0YkChqAD25cgiomtJ8JNw&usqp=CAU",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "Cant Hurt Me",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81gTRv2HXrL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "The Subtle Art of Not Giving a F*ck",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolhnClPiw0fun65Zu2Ax-aM1t1UzCigTHWqy64YPkyQ&s",
    },
    {
      id: 5,
      title: "Educated: A Memoir",
      image:
        "https://m.media-amazon.com/images/I/81NwOj14S6L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      title: "Sapiens: A Brief History of Humankind",
      image: "https://m.media-amazon.com/images/I/41yu2qXhXXL.jpg",
    },
    {
      id: 7,
      title: "The Great Gatsby",
      image: "https://m.media-amazon.com/images/I/41XMaCHkrgL.jpg",
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81aY1lxk+9L._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 9,
      title: "The Alchemist",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY218_.jpg",
    },
    {
      id: 10,
      title: "The Hobbit",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 11,
      title: "Harry Potter and the Sorcerer's Stone",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71u-cpucTRL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 12,
      title: "Lessons in Chemistry",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8hLXTUhtmUai9WnPRYv3W_Sl1e4uTDscxTGtY4M6Iw&s",
    },
    // Add more books as needed
  ];

  return (
    <div className="bestSellersBooks">
      <h2 className="bestSellersBooks__title">Best Sellers in Books</h2>
      <div className="bestSellersBooks__list">
        {bestSellersData.map((book) => (
          <div key={book.id} className="bestSellersBooks__item">
            <img src={book.image} alt={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerBook;
