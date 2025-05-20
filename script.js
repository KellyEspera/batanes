// script.js - JavaScript for Batanes Cuisine Explorer (Client-Side Filtering)
// script.js - Batanes Cuisine Explorer


const recipesData = [
    {
        id: "uvud_balls", // Unique ID for linking
        title: "Uvud Balls (Banana Pith)",
        category: "root_crop", // Or "meat" if ground meat is primary
        image_url: "img/uvud.jpg",
        description: "A traditional Ivatan dish made from banana pith, ground meat, and spices. A unique and hearty Batanes specialty.",
        prep_time: "45 minutes",
        cook_time: "30 minutes",
        servings: "4-6",
        ingredients: [
            "2 cups grated banana pith (uvud), excess moisture squeezed out",
            "250g ground pork (or beef/fish)",
            "1 large onion, minced",
            "3-4 cloves garlic, minced",
            "1 teaspoon salt (or to taste)",
            "1/2 teaspoon ground black pepper",
            "Optional: 1 egg, beaten (for binding)",
            "Optional: 2 tablespoons flour or breadcrumbs (for binding)"
        ],
        procedure: [
            "In a large bowl, combine the grated banana pith, ground meat, minced onion, and minced garlic.",
            "Season with salt and pepper. Add the beaten egg and flour/breadcrumbs if using. Mix everything thoroughly until well combined.",
            "Form the mixture into small to medium-sized balls (about 1.5 to 2 inches in diameter).",
            "Choose your cooking method:",
            "Steaming: Arrange Uvud balls in a steamer basket lined with banana leaves or parchment paper. Steam for about 20-30 minutes, or until cooked through and firm.",
            "Frying: Heat cooking oil in a pan over medium heat. Carefully fry the Uvud balls in batches, turning occasionally, until golden brown on all sides and cooked through (about 10-15 minutes).",
            "Serve hot with rice or as a standalone dish. Can be accompanied by a vinegar dipping sauce."
        ]
    },
    {
        id: "vunes",
        title: "Vunes (Dried Gabi Stalks)",
        category: "vegetable",
        image_url: "img/venes.jpg", // Corrected from venes.jpg if your actual image is venes.jpg
        description: "Dried taro (gabi) stalks cooked with pork or fish, a staple and preserved Ivatan delicacy, similar to laing.",
        prep_time: "30 minutes (plus 2-4 hours soaking time for vunes)",
        cook_time: "45-60 minutes",
        servings: "4-5",
        ingredients: [
            "100g Vunes (dried gabi/taro stalks)",
            "150g pork belly, cubed (or fish like dibang, or octopus/kuyta)",
            "1 cup thick coconut milk (unang piga/kakang gata)",
            "1/2 cup thin coconut milk or water (pangalawang piga, optional)",
            "1 medium onion, chopped",
            "4-5 cloves garlic, minced",
            "1 thumb-sized ginger, peeled and julienned or minced",
            "1-2 siling haba (long green chili), sliced (optional, for mild heat)",
            "Optional: 1 siling labuyo (bird's eye chili), chopped (for more heat)",
            "Salt and freshly ground black pepper to taste",
            "Cooking oil"
        ],
        procedure: [
            "Prepare the Vunes: Soak the dried gabi stalks (Vunes) in plenty of water for at least 2-4 hours, or preferably overnight, until fully rehydrated and softened. Change the water a couple of times. After soaking, drain well and chop into 1-2 inch lengths.",
            "Pre-boil Vunes: In a pot, bring fresh water to a boil. Add the chopped vunes and boil for 15-20 minutes to further soften and remove any potential itchiness. Drain thoroughly and set aside.",
            "Sauté Aromatics: In a separate heavy-bottomed pot or wok, heat a little cooking oil over medium heat. Sauté garlic until fragrant, then add onions and ginger. Cook until onions are translucent.",
            "Cook Meat: Add the cubed pork belly and cook until lightly browned and some fat has rendered. If using fish, add it later. If using octopus, it might need pre-boiling to tenderize.",
            "Combine: Add the pre-boiled and drained vunes to the pot. Stir well to combine with the pork and aromatics.",
            "Add Coconut Milk: Pour in the thick coconut milk (and thin coconut milk/water if using). Add the siling haba if desired.",
            "Simmer: Bring the mixture to a gentle simmer. Do not boil vigorously once coconut milk is added. Reduce heat to low, cover the pot, and let it cook for 20-30 minutes, or until the vunes are very tender and the sauce has thickened and become oily. Stir occasionally to prevent sticking.",
            "Season: Season with salt and freshly ground black pepper to taste. Add siling labuyo now if you want it spicier.",
            "Serve: Serve hot with steamed rice."
        ]
    },
    {
        id: "dibang_kinilaw",
        title: "Kinilaw na Dibang (Flying Fish Ceviche)",
        category: "fish",
        image_url: "img/dibang.jpg", // Use an appropriate image for kinilaw
        description: "A refreshing Batanes specialty, also known as Lataven. Fresh flying fish is 'cooked' in vinegar with ginger, onions, and chili.",
        prep_time: "20 minutes (plus 30-60 mins marinating)",
        cook_time: "0 minutes (no heat)",
        servings: "3-4",
        ingredients: [
            "500g fresh Dibang (Flying Fish) fillets, deboned and skin removed",
            "1 cup white vinegar (preferably local sukang Iloco or palm vinegar)",
            "1 large red onion, thinly sliced or minced",
            "2-3 thumb-sized pieces of ginger, peeled and minced finely",
            "2-3 siling labuyo (bird's eye chili), chopped (adjust to desired spiciness)",
            "1 teaspoon rock salt (or to taste)",
            "1/2 teaspoon freshly ground black pepper (optional)",
            "Optional: 2-3 tablespoons calamansi juice for extra citrusy flavor",
            "Optional: 1 small cucumber, peeled, seeded, and diced (for crunch)",
            "Optional: Chopped spring onions or cilantro for garnish"
        ],
        procedure: [
            "Prepare the Fish: Ensure the Dibang fillets are very fresh. Slice them into small, uniform, bite-sized cubes (about 1/2 to 3/4 inch).",
            "Initial Vinegar Wash (Optional but Recommended): Place the cubed fish in a bowl and pour about 1/4 cup of the vinegar over it. Gently toss for about 30 seconds to a minute. Drain this vinegar thoroughly. This step helps to firm up the fish and reduce any fishy odor.",
            "Combine Main Ingredients: In a non-metallic bowl (glass or ceramic is best), combine the (washed) cubed fish, sliced red onions, minced ginger, and chopped chili peppers. Add diced cucumber if using.",
            "Add Vinegar and Seasoning: Pour the remaining fresh vinegar (about 3/4 cup, or enough to mostly cover the fish) over the fish mixture. Add the salt and black pepper (if using). If you like it tarter and more citrusy, add the calamansi juice.",
            "Mix Gently: Gently toss all the ingredients together to ensure the fish is evenly coated with the vinegar and seasonings. Be careful not to overmix or 'bruise' the fish.",
            "Marinate ('Cook' in Vinegar): Cover the bowl with plastic wrap or a lid and place it in the refrigerator. Let it marinate for at least 30 minutes to 1 hour. The fish will gradually turn opaque as the acidity of the vinegar 'cooks' it. Some prefer a shorter marination for a fresher, more raw taste, while others prefer it more 'cooked' through.",
            "Taste and Adjust: After the marination time, taste a piece of the fish. Adjust the seasoning if necessary – you might need more salt, vinegar, or calamansi juice according to your preference.",
            "Serve: Serve the Kinilaw na Dibang chilled. Garnish with chopped spring onions or cilantro if desired. It's best consumed within a few hours of preparation. Serve as an appetizer (pulutan) or as a main dish with rice."
        ]
    },
    {
        id: "lunis",
        title: "Luñis (Ivatan Salted Pork)",
        category: "pork",
        image_url: "img/luñis.jpg",
        description: "Batanes' version of adobo, where pork is slow-cooked in its own fat with rock salt until crispy and preserved. A true Ivatan heritage dish.",
        prep_time: "20 minutes",
        cook_time: "1.5-2 hours (or longer for very tender results)",
        servings: "4-6",
        ingredients: [
            "1 kg pork belly or pork shoulder (liempo or kasim), cut into 2-inch cubes",
            "2-3 tablespoons coarse rock salt (adjust to taste and saltiness of your salt)",
            "Optional: 1/4 to 1/2 cup water (to help start rendering fat)"
        ],
        procedure: [
            "Prepare the Pork: Pat the pork cubes dry with paper towels. This helps in achieving a crispier result.",
            "Season the Pork: In a large bowl, rub the pork cubes thoroughly and evenly with the rock salt. Ensure all surfaces are coated.",
            "Arrange in Pot: In a heavy-bottomed pot, kawa, or Dutch oven, arrange the salted pork pieces in a single layer, preferably fat-side down to start.",
            "Start Cooking (Rendering Fat): Add the optional water to the pot. This helps to gently cook the pork and start rendering the fat without burning the meat initially. Cook over medium-low heat, uncovered. Do not stir at this stage.",
            "Slow Cook and Fry: As the water evaporates, the pork fat will begin to render. Continue to cook over low to medium-low heat. The pork will gradually start to fry in its own rendered lard. This is a slow process. Stir occasionally (every 15-20 minutes at first, then more frequently as it browns) to prevent sticking and ensure even cooking and browning. Be patient; this slow cooking is key to tender Luñis.",
            "Achieve Crispiness: Continue cooking until the pork pieces are deep golden brown, the skin (if using pork belly) is crispy, and the meat is tender. This can take 1.5 to 2 hours, or even longer depending on the cut and desired tenderness. The rendered lard should be clear.",
            "Rest and Store (Traditional Method): Carefully remove the cooked Luñis pieces from the pot and set them aside. Strain the rendered lard through a fine-mesh sieve or cheesecloth into a clean, heatproof container. Let both the Luñis and the lard cool completely.",
            "For long-term storage (traditional Ivatan preservation), place the cooled Luñis pieces in a sterilized airtight jar (traditionally an earthen jar or 'tagaw'). Pour the cooled, clarified lard over the pork, ensuring the pieces are completely submerged. Stored this way in a cool, dark place, Luñis can last for months.",
            "Serving: To serve, take out the desired amount of Luñis from the lard. You can re-fry the pieces in a little of their own lard until hot and extra crispy. Serve hot with steamed rice (especially Supas - turmeric rice) and a dipping sauce of vinegar with crushed garlic and chili."
        ]
    },
    {
        id: "supas",
        title: "Supas (Batanes Turmeric Rice)",
        category: "root_crop", // Turmeric is a rhizome/root
        image_url: "img/supas.jpg",
        description: "A vibrant yellow rice dish from Batanes, flavored and colored with fresh turmeric (yellow ginger), often cooked with garlic and bits of pork.",
        prep_time: "15 minutes",
        cook_time: "20-25 minutes",
        servings: "4-6",
        ingredients: [
            "2 cups uncooked white rice, rinsed",
            "1-2 tablespoons fresh turmeric, grated or finely minced (or 1-2 tsp turmeric powder)",
            "3-4 cloves garlic, minced",
            "Optional: 100g pork belly or shoulder, cut into small bits",
            "Optional: 1 small onion, chopped",
            "2.5 to 3 cups water or broth (adjust based on rice type)",
            "1 tablespoon cooking oil or pork lard",
            "Salt to taste"
        ],
        procedure: [
            "Prepare Turmeric: If using fresh turmeric, peel and grate or mince it finely. Be mindful as fresh turmeric can stain hands and surfaces.",
            "Sauté Aromatics (and Pork): Heat cooking oil or lard in a rice cooker pot (if it has a sauté function) or a regular pot over medium heat. If using pork, add it and cook until lightly browned and fat is rendered. Add garlic (and onion if using) and sauté until fragrant.",
            "Add Turmeric: Add the fresh grated/minced turmeric (or turmeric powder) to the pot. Stir and cook for about a minute until its aroma is released and the oil is infused with color.",
            "Add Rice: Add the rinsed rice to the pot. Stir gently for a minute or two to coat the grains with the turmeric-infused oil.",
            "Add Liquid and Seasoning: Pour in the water or broth. Add salt to taste. Stir well.",
            "Cook Rice: ",
            "If using a rice cooker: Close the lid and cook according to the rice cooker's instructions.",
            "If using a pot: Bring the mixture to a boil. Once boiling, reduce the heat to low, cover the pot tightly with a lid, and simmer for 15-20 minutes, or until all the liquid is absorbed and the rice is tender. Do not lift the lid during this simmering time.",
            "Rest: Once cooked, turn off the heat (or the rice cooker will switch to 'keep warm'). Let the rice rest, covered, for at least 5-10 minutes. This allows the steam to finish cooking the grains perfectly.",
            "Fluff and Serve: Fluff the Supas gently with a fork or rice paddle before serving. Serve hot as a side dish, especially with traditional Ivatan viands like Luñis or fried Dibang."
        ]
    },
    {
        id: "payi_steamed",
        title: "Steamed Payi (Batanes Lobster)",
        category: "fish", // Or a more specific "Seafood" category if you create one
        image_url: "img/lobster.jpg",
        description: "A simple yet elegant way to enjoy the fresh, sweet flavor of Batanes Payi (lobster). Steaming preserves its natural taste and tenderness.",
        prep_time: "20 minutes",
        cook_time: "12-18 minutes (depending on size)",
        servings: "2-4 (depending on lobster size)",
        ingredients: [
            "1-2 large Batanes Payi (Lobsters), about 500-700g each, preferably live or very fresh",
            "Water for steaming",
            "Optional aromatics for steaming water: 2-3 slices of ginger, 1 stalk of lemongrass (bruised)",
            "For serving (optional):",
            "Melted butter",
            "Minced garlic (to mix with butter)",
            "Lemon or calamansi wedges",
            "Salt and freshly ground black pepper to taste"
        ],
        procedure: [
            "Prepare the Lobster: If live, humanely dispatch the lobster. One common method is to place it in the freezer for 30-60 minutes to make it lethargic, then quickly drive a sharp knife through the head between the eyes. Alternatively, plunge it headfirst into a large pot of rapidly boiling water for 60 seconds, then remove. Clean the lobster under running water. You can steam it whole or split it lengthwise.",
            "Set up Steamer: Prepare a large pot with a steamer basket or rack. Add about 1-2 inches of water to the pot, ensuring the water level is below the steamer basket. If using aromatics (ginger, lemongrass), add them to the water.",
            "Steam the Lobster: Bring the water to a rolling boil over high heat. Carefully place the lobsters on the steamer basket. It's best not to overcrowd the steamer; cook in batches if necessary.",
            "Cover and Steam: Cover the pot tightly with a lid and reduce the heat to medium or medium-high to maintain a steady steam. Steam the lobsters based on their weight: typically 10-12 minutes for the first pound (approx. 450g), and add 3-4 minutes for each additional pound. For example, a 1.5lb lobster might take 15-18 minutes. If split, they may cook slightly faster.",
            "Check for Doneness: The lobster is cooked when its shell turns a bright, vibrant red, and the meat is opaque and white all the way through. The internal temperature should reach 70-74°C (160-165°F). The antennae should also pull out easily if cooked.",
            "Rest Briefly: Carefully remove the steamed lobsters from the pot and let them rest for a couple of minutes.",
            "Serve: Serve the steamed Payi immediately. If desired, serve with small bowls of melted butter (optionally mixed with fresh minced garlic) and lemon or calamansi wedges for squeezing over the lobster meat. Season with salt and pepper at the table if needed.",
            "Enjoy the fresh, sweet taste of Batanes lobster!"
        ]
    }
    // Add more recipes here...
];

const storesData = [
    {
        id: "batanes_agri_trade_center",
        name: "Batanes Market Place",
        location: "Brgy. Kayhuvokan, Basco, Batanes",
        website: "#", // Use "#" or an actual link if available
        phone: "#",
        operating_hours: "Mon-Sun: 8 AM - 5 PM",
        notes: "Sells a variety of locally sourced fresh produce, preserved goods, and handmade crafts.",
        sells_products: [
            "Fresh Batanes Turmeric", 
            "Yam (Uvi)", 
            "Batanes Sweet Potato (Wakay)",
            "Taro (Gabi / Sudi)",
            "Banana Pith (Uvud)",
            "Batanes Onions",
            "Mahi-Mahi (Arayu)",
            "Lobster (Payi)",
            "Sugarcane Wine (Palek)",
            "Tamiduk",
            "Lobster (Payi)",
            "Dried Flying Fish (Dibang)"
        ]
    },
    {
        id: "honesty_coffee_shop",
        name: "Honesty Coffee Shop",
        location: "National Road, Radiwan, Ivana, Batanes",
        website: "#",
        phone: "#",
        operating_hours: "Mon-Sun: 8 AM - 5 PM",
        notes: "Focuses on souvenir items, packaged delicacies, and some fresh produce.",
        sells_products: [
            "Native Batanes Garlic",
            "Sugarcane Wine (Palek)",
            "Batanes Onions"
        ]
    },
    {
        id: "tawsend",
        name: "Tawsend",
        location: "Brgy. Kaychanarianan, Basco, Batanes",
        website: "#",
        phone: "#",
        operating_hours: "Daily: 8 AM - 5 PM",
        notes: "Good source for variety products",
        sells_products: [
            "Fresh Batanes Turmeric",
            "Taro (Gabi/Sudi)",
            "Sugarcane Wine (Palek)",
        ]
    },
    {
        id: "sulas_merchandise",
        name: "Sulas Merchandise",
        location: "Abat St.,Brgy. Kayhuvokan, Basco, Batanes",
        website: "#",
        phone: "#",
        operating_hours: "Daily: 8 AM - 5 PM",
        notes: "Good source for variety products",
        sells_products: [
            "Fresh Batanes Turmeric",
            "Yam (Uvi)",
            "Batanes Sweet Potato (Wakay)",
            "Taro (Gabi/Sudi)",
            "Native Batanes Garlic",
            "Mahi-Mahi (Arayu)", 
            "Lobster (Payi)",  
            "Tamiduk",          
            "Batanes Onions"
        ]
    },
    {
        id: "diura_fishing_village",
        name: "Diura Fishing Village",
        location: "Brgy. Uvoy, Mahato, Batanes",
        website: "#",
        phone: "#",
        operating_hours: "Daily: 8 AM - 5 PM",
        notes: "Good source for variety products",
        sells_products: [
            "Mahi-Mahi (Arayu)", 
            "Lobster (Payi)",  
            "Dried Flying Fish (Dibang)"
        ]
    },
   
];


document.addEventListener('DOMContentLoaded', function() {
    // --- Navigation Elements ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link'); // Includes header, mobile, and footer links
    const pageSections = document.querySelectorAll('.page-section');

    // --- Recipe Filter Elements ---
    const recipeSearchForm = document.getElementById('recipe-search-form');
    const recipeSearchInput = document.getElementById('recipe-search-input');
    const recipeFilterSelect = document.getElementById('recipe-filter-select');
    const recipeGrid = document.getElementById('recipe-grid');
    const recipeCards = recipeGrid ? recipeGrid.querySelectorAll('.recipe-card') : [];
    const noRecipesMessage = document.getElementById('no-recipes-found'); // Message element

    // --- Tutorial Elements ---
    const tutorialGrid = document.getElementById('tutorial-grid');
    const videoModal = document.getElementById('video-modal');
    const closeVideoModalButton = document.getElementById('close-video-modal');
    const videoPlayerContainer = document.getElementById('video-player-container');
    const videoModalTitle = document.getElementById('video-modal-title');

    // --- Marketplace Elements ---
    const productGrid = document.getElementById('product-grid');
    const cartNotification = document.getElementById('cart-notification');

    // --- Newsletter Elements ---
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmailInput = document.getElementById('newsletter-email');
    const newsletterResponse = document.getElementById('newsletter-response');


    // --- Mobile Menu Toggle ---
    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });
    } else {
        console.warn("Mobile navigation elements not found.");
    }

    // --- Section Navigation Logic ---
    function showSection(sectionId) {
        let sectionFound = false;
        pageSections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
                 // Add fade-in effect after a tiny delay
                 setTimeout(() => { section.classList.add('fade-in'); }, 10);
                sectionFound = true;
            } else {
                section.classList.add('hidden');
                section.classList.remove('fade-in'); // Remove fade class from hidden sections
            }
        });

        // Fallback if the target section doesn't exist (e.g., bad hash)
        if (!sectionFound) {
             const homeSection = document.getElementById('home');
             if (homeSection) {
                 homeSection.classList.remove('hidden');
                 setTimeout(() => { homeSection.classList.add('fade-in'); }, 10);
                 sectionId = 'home'; // Correct sectionId for active link highlighting
             }
        }

        // Update active link state in all navigation areas
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Ensure link has data-section before comparing
            if (link.dataset.section && link.dataset.section === sectionId) {
                link.classList.add('active');
            }
        });

        // Close mobile menu after clicking a navigation link
        if (mobileNav && !mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
        }
    }

    // Add click listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Handle only internal section links identified by data-section
            if (link.dataset.section) {
                 event.preventDefault(); // Prevent default anchor jump/navigation
                 const sectionId = link.dataset.section;
                 showSection(sectionId);
                 // Optional: Update URL hash dynamically
                 // try { history.pushState(null, null, '#' + sectionId); } catch (e) {}
            }
            // Allow default behavior for other links (like external or PHP links recipe_*.php)
        });
    });


    // --- Combined Recipe Search and Filter Logic (Client-Side) ---
    function filterRecipes() {
        // Ensure elements exist before trying to access properties
        if (!recipeSearchInput || !recipeFilterSelect || !recipeGrid || recipeCards.length === 0) {
            console.warn("Attempted to filter recipes but elements were missing.");
            return;
        }
        const searchTerm = recipeSearchInput.value.toLowerCase().trim();
        const selectedCategory = recipeFilterSelect.value;
        let visibleCount = 0;

        recipeCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardTitleElement = card.querySelector('.card-title');
            const cardTextElement = card.querySelector('.card-text');
            // Safely get text content, default to empty string if element missing
            const cardTitle = cardTitleElement ? cardTitleElement.textContent.toLowerCase() : '';
            const cardText = cardTextElement ? cardTextElement.textContent.toLowerCase() : '';
            const cardContent = cardTitle + " " + cardText;

            const categoryMatch = (selectedCategory === "" || cardCategory === selectedCategory);
            const searchMatch = (searchTerm === "" || cardContent.includes(searchTerm));

            if (categoryMatch && searchMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        // Toggle the 'no results' message visibility
        if(noRecipesMessage){
             // Show message if count is 0 AND there was actually a filter applied
             const isFiltered = searchTerm !== '' || selectedCategory !== '';
             noRecipesMessage.classList.toggle('hidden', visibleCount > 0 || !isFiltered);
        }
    }

    // Add listeners for recipe filtering only if elements exist on the page
    if (recipeSearchForm && recipeSearchInput && recipeFilterSelect && recipeGrid && recipeCards.length > 0) {
        // Filter when the form is submitted (Search button or Enter)
        recipeSearchForm.addEventListener('submit', function(event) {
            // **** THIS LINE PREVENTS THE PAGE REFRESH ****
            event.preventDefault();
            // **********************************************
            filterRecipes(); // Run the filter function
        });

        // Filter live when category changes
        recipeFilterSelect.addEventListener('change', filterRecipes);

        // Filter live while typing in search input
        recipeSearchInput.addEventListener('input', filterRecipes);

    } else {
        // Only log warnings if the core filter controls are missing.
        // It's okay if recipeGrid/recipeCards are null initially if #recipes is hidden.
        if (!recipeSearchForm) console.warn("Recipe search form (#recipe-search-form) not found.");
        if (!recipeSearchInput) console.warn("Recipe search input (#recipe-search-input) not found.");
        if (!recipeFilterSelect) console.warn("Recipe filter select (#recipe-filter-select) not found.");
    }
    // --- End Recipe Filter Logic ---


    // --- Tutorial Video Modal Logic ---
     if (videoModal && closeVideoModalButton && tutorialGrid) {
        tutorialGrid.addEventListener('click', function(event) {
            const tutorialCard = event.target.closest('.tutorial-card');
            if (tutorialCard) {
                const iframe = tutorialCard.querySelector('iframe');
                const titleElement = tutorialCard.querySelector('.card-title');
                if (iframe && titleElement) {
                    const videoUrl = iframe.getAttribute('src');
                    const tutorialTitle = titleElement.textContent;
                    if (videoUrl) {
                        let embedHtml = `<iframe class="video-player-iframe" src="${videoUrl}" title="${tutorialTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                        videoModalTitle.textContent = tutorialTitle;
                        videoPlayerContainer.innerHTML = embedHtml;
                        videoModal.classList.remove('hidden');
                    } else { alert('Video URL could not be determined.'); }
                }
            }
        });
        closeVideoModalButton.addEventListener('click', () => { videoPlayerContainer.innerHTML = ''; videoModal.classList.add('hidden'); });
        videoModal.addEventListener('click', (event) => { if (event.target === videoModal) { videoPlayerContainer.innerHTML = ''; videoModal.classList.add('hidden'); } });
    } else { console.warn("Video modal elements or tutorial grid not found."); }

    // --- Marketplace "Add to Cart" Simulation ---
    if (productGrid && cartNotification) {
         productGrid.addEventListener('click', function(event) {
             const addButton = event.target.closest('.add-to-cart-btn');
             if (addButton) {
                 const productName = addButton.dataset.productName || 'Item';
                 console.log(`Adding "${productName}" to cart (simulated).`);
                 cartNotification.textContent = `${productName} added to cart!`;
                 cartNotification.classList.remove('hidden');
                 cartNotification.style.animation = 'none'; void cartNotification.offsetWidth; cartNotification.style.animation = 'fadeInOut 3s ease-in-out forwards';
                 setTimeout(() => { cartNotification.classList.add('hidden'); }, 3000);
             }
         });
    } else { console.warn("Product grid or cart notification element not found."); }

     // --- Newsletter Form Simulation ---
     if (newsletterForm && newsletterEmailInput && newsletterResponse) {
         newsletterForm.addEventListener('submit', function(event) {
             event.preventDefault();
             const email = newsletterEmailInput.value.trim();
             if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                 console.log(`Subscribing ${email} to newsletter (simulated).`);
                 newsletterResponse.textContent = "Thank you for subscribing!"; newsletterResponse.style.color = 'green'; newsletterEmailInput.value = '';
             } else {
                 newsletterResponse.textContent = "Please enter a valid email address."; newsletterResponse.style.color = 'red';
             }
             newsletterResponse.classList.remove('hidden');
             setTimeout(() => { newsletterResponse.classList.add('hidden'); }, 4000);
         });
     } else { console.warn("Newsletter form elements not found."); }


    // --- Initial Setup ---
    const initialHash = window.location.hash.substring(1);
    const validSectionIds = Array.from(pageSections).map(sec => sec.id);
    let initialSection = 'home';
    if (initialHash && validSectionIds.includes(initialHash)) {
        initialSection = initialHash;
    }
    showSection(initialSection); // Show the correct initial section

}); // End DOMContentLoaded


// Optional: Add CSS animation for the cart notification & iframe styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fadeInOut { 0%, 100% { opacity: 0; transform: translateY(20px); } 10%, 90% { opacity: 1; transform: translateY(0); } }
.cart-notification { animation: none; }
.video-player-iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
.no-results { text-align: center; margin-top: 2rem; color: #6b7280; font-size: 1.1em; width: 100%; }
`;
document.head.appendChild(styleSheet);