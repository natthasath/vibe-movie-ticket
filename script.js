// Sample movie data
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        duration: "3ชม. 1นาที",
        rating: 4.8
    },
    {
        id: 2,
        title: "Joker",
        category: "drama",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        duration: "2ชม. 2นาที",
        rating: 4.3
    },
    {
        id: 3,
        title: "The Conjuring",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg",
        duration: "1ชม. 52นาที",
        rating: 4.0
    },
    {
        id: 4,
        title: "Inception",
        category: "sci-fi",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        duration: "2ชม. 28นาที",
        rating: 4.5
    },
    {
        id: 5,
        title: "The Dark Knight",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        duration: "2ชม. 32นาที",
        rating: 4.9
    },
    {
        id: 6,
        title: "John Wick",
        category: "action",
        poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
        duration: "1ชม. 41นาที",
        rating: 4.2
    },
    {
        id: 7,
        title: "Parasite",
        category: "drama",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        duration: "2ชม. 12นาที",
        rating: 4.6
    },
    {
        id: 8,
        title: "Interstellar",
        category: "sci-fi",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        duration: "2ชม. 49นาที",
        rating: 4.7
    },
    {
        id: 9,
        title: "Get Out",
        category: "horror",
        poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
        duration: "1ชม. 44นาที",
        rating: 4.4
    },
    {
        id: 10,
        title: "The Grand Budapest Hotel",
        category: "comedy",
        poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
        duration: "1ชม. 39นาที",
        rating: 4.2
    },
    {
        id: 11,
        title: "La La Land",
        category: "drama",
        poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        duration: "2ชม. 8นาที",
        rating: 4.5
    },
    {
        id: 12,
        title: "The Matrix",
        category: "sci-fi",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        duration: "2ชม. 16นาที",
        rating: 4.7
    }
];

// DOM elements
const movieGallery = document.getElementById('movie-gallery');
const bookingSection = document.getElementById('booking-section');
const ticketSection = document.getElementById('ticket');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const backBtn = document.getElementById('back-btn');
const backToMoviesBtn = document.getElementById('back-to-movies');
const printBtn = document.getElementById('print-btn');
const movieCount = document.getElementById('movie-count');
const selectedSeatsDisplay = document.getElementById('selected-seats');
const seatCountDisplay = document.getElementById('seat-count');
const totalPriceDisplay = document.getElementById('total-price');

// Prices
const ticketPrices = {
    normal: 180,
    student: 120,
    senior: 100
};

// Initialize the app
function init() {
    renderMovies(movies);
    setupEventListeners();
    updateMovieCount(movies.length);
}

// Render movies to the gallery
function renderMovies(moviesToRender) {
    movieGallery.innerHTML = '';
    
    moviesToRender.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.dataset.id = movie.id;
        movieCard.dataset.category = movie.category;
        
        // Generate star rating
        const stars = generateStars(movie.rating);
        
        movieCard.innerHTML = `
            <div class="h-full flex flex-col">
                <img src="${movie.poster}" alt="${movie.title}" class="w-full h-64 object-cover rounded-t-lg">
                <div class="bg-white p-4 rounded-b-lg flex-grow">
                    <h3 class="text-lg font-bold mb-1 line-clamp-1">${movie.title}</h3>
                    <span class="inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(movie.category)} mb-2">
                        ${getCategoryName(movie.category)}
                    </span>
                    <div class="flex items-center text-yellow-400 mb-1">
                        ${stars}
                        <span class="ml-1 text-gray-600 text-sm">${movie.rating.toFixed(1)}</span>
                    </div>
                    <p class="text-gray-500 text-sm">${movie.duration}</p>
                    <button class="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-300">
                        <i class="fas fa-ticket-alt mr-1"></i> จองตั๋ว
                    </button>
                </div>
            </div>
        `;
        
        movieGallery.appendChild(movieCard);
    });
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Get category name in Thai
function getCategoryName(category) {
    const categories = {
        'action': 'แอคชั่น',
        'comedy': 'คอมเมดี้',
        'drama': 'ดราม่า',
        'horror': 'สยองขวัญ',
        'sci-fi': 'ไซไฟ'
    };
    return categories[category] || category;
}

// Get category color classes
function getCategoryColor(category) {
    const colors = {
        'action': 'bg-red-100 text-red-800',
        'comedy': 'bg-yellow-100 text-yellow-800',
        'drama': 'bg-blue-100 text-blue-800',
        'horror': 'bg-gray-100 text-gray-800',
        'sci-fi': 'bg-green-100 text-green-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
}

// Setup event listeners
function setupEventListeners() {
    // Movie card click
    movieGallery.addEventListener('click', (e) => {
        const movieCard = e.target.closest('.movie-card');
        if (movieCard) {
            const movieId = parseInt(movieCard.dataset.id);
            const movie = movies.find(m => m.id === movieId);
            showBookingSection(movie);
        }
    });

    // Category filter
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterMovies(category);
        });
    });

    // Search
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        filterMovies(activeCategory, searchTerm);
    });

    // Search button
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        filterMovies(activeCategory, searchTerm);
    });

    // Booking form submit
    document.getElementById('booking-form').addEventListener('submit', (e) => {
        e.preventDefault();
        generateTicket();
    });

    // Back button (to home)
    backBtn.addEventListener('click', () => {
        ticketSection.style.display = 'none';
        document.getElementById('movie-selection').style.display = 'block';
    });

    // Back to movies button
    backToMoviesBtn.addEventListener('click', () => {
        bookingSection.style.display = 'none';
        document.getElementById('movie-selection').style.display = 'block';
    });

    // Print button
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Initialize seats
    generateSeats();

    // Ticket type change
    document.getElementById('ticket-type').addEventListener('change', updateSeatSelection);
}

// Filter movies by category and search term
function filterMovies(category, searchTerm = '') {
    let filteredMovies = movies;

    if (category !== 'all') {
        filteredMovies = filteredMovies.filter(movie => movie.category === category);
    }

    if (searchTerm) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm)
        );
    }

    renderMovies(filteredMovies);
    updateMovieCount(filteredMovies.length);
}

// Update movie count display
function updateMovieCount(count) {
    movieCount.textContent = count;
}

// Show booking section with selected movie
function showBookingSection(movie) {
    document.getElementById('movie-selection').style.display = 'none';
    bookingSection.style.display = 'block';

    document.getElementById('booking-poster').src = movie.poster;
    document.getElementById('booking-title').textContent = movie.title;
    
    const categoryElement = document.getElementById('booking-category');
    categoryElement.textContent = getCategoryName(movie.category);
    categoryElement.className = `inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(movie.category)}`;

    // Set tomorrow as default date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('date').valueAsDate = tomorrow;

    // Reset form
    document.getElementById('theater').selectedIndex = 0;
    document.getElementById('time').selectedIndex = 0;
    document.getElementById('ticket-type').selectedIndex = 0;
    
    // Reset seats
    generateSeats();
}

// Generate seats for booking
function generateSeats() {
    const seatsGrid = document.getElementById('seats-grid');
    seatsGrid.innerHTML = '';

    // Generate 50 seats (5 rows x 10 seats)
    for (let i = 0; i < 50; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat flex items-center justify-center cursor-pointer';
        seat.dataset.seat = String.fromCharCode(65 + Math.floor(i / 10)) + (i % 10 + 1);

        // Randomly mark some seats as occupied (for demo)
        if (Math.random() < 0.2) {
            seat.classList.add('bg-red-500', 'text-white', 'occupied');
            seat.classList.remove('cursor-pointer');
            seat.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            seat.classList.add('bg-gray-200', 'hover:bg-gray-300');
            seat.textContent = seat.dataset.seat;
        }

        seat.addEventListener('click', () => {
            if (!seat.classList.contains('occupied')) {
                seat.classList.toggle('bg-green-500');
                seat.classList.toggle('text-white');
                seat.classList.toggle('selected');
                updateSeatSelection();
            }
        });

        seatsGrid.appendChild(seat);
    }
}

// Update seat selection display
function updateSeatSelection() {
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
        .map(seat => seat.dataset.seat);
    
    const seatCount = selectedSeats.length;
    const ticketType = document.getElementById('ticket-type').value;
    const pricePerSeat = ticketPrices[ticketType] || 180;
    const totalPrice = seatCount * pricePerSeat;
    
    selectedSeatsDisplay.textContent = selectedSeats.join(', ') || '-';
    seatCountDisplay.textContent = `${seatCount} ที่นั่ง`;
    totalPriceDisplay.textContent = `฿${totalPrice}`;
}

// Generate ticket
function generateTicket() {
    const movieTitle = document.getElementById('booking-title').textContent;
    const poster = document.getElementById('booking-poster').src;
    const theater = document.getElementById('theater').options[document.getElementById('theater').selectedIndex].text;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;
    const ticketType = document.getElementById('ticket-type').options[document.getElementById('ticket-type').selectedIndex].text;

    // Get selected seats
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
        .map(seat => seat.dataset.seat)
        .join(', ');

    if (!selectedSeats) {
        alert('กรุณาเลือกที่นั่ง');
        return;
    }

    // Calculate total price
    const seatCount = Array.from(document.querySelectorAll('.seat.selected')).length;
    const pricePerSeat = ticketPrices[document.getElementById('ticket-type').value] || 180;
    const totalPrice = seatCount * pricePerSeat;

    // Generate reference number
    const refNumber = `REF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Display ticket
    bookingSection.style.display = 'none';
    ticketSection.style.display = 'block';

    document.getElementById('ticket-poster').src = poster;
    document.getElementById('ticket-movie').textContent = movieTitle;
    document.getElementById('ticket-theater').textContent = theater;
    document.getElementById('ticket-date').textContent = formatDate(date);
    document.getElementById('ticket-time').textContent = time;
    document.getElementById('ticket-seats').textContent = selectedSeats;
    document.getElementById('ticket-ref').textContent = refNumber;
    document.getElementById('ticket-issue-date').textContent = formatDate(new Date());
}

// Format date to Thai format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('th-TH', options);
}

// Initialize the app
init(); 