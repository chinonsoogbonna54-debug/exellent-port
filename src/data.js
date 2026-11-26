export const person = {
  name: 'Ejimeh Solomon Excellent',
  role: 'UI/UX designer',
  location: 'Delta State, Nigeria',
  email: 'Excellentsolomon222@gmail.com',
  phone: '09077026856',
  phoneHref: '+2349077026856',
  intro:
    'I design mobile apps and web interfaces, from the first wireframe to the final screens. My work covers shopping, food delivery, ride-hailing, onboarding and a workflow automation tool.',
  about:
    'I am a UI/UX designer based in Delta State, Nigeria. I like to settle the flow in plain greyscale wireframes before colour and type go in, so the final screens are built on a structure that already works. I care about checkout steps that stay clear when the basket is expensive, onboarding that asks for as little as possible, and interfaces that make sense to a first-time user.',
  skills: ['Mobile app design', 'Web app interfaces', 'Wireframing', 'Checkout and payment flows', 'Onboarding flows', 'Visual design'],
}

const i = (slug, n, alt, caption) => ({
  src: `/work/${slug}/${String(n).padStart(2, '0')}.jpg`,
  alt,
  caption,
})

export const projects = [
  {
    slug: 'powerpay',
    title: 'PowerPay',
    type: 'Gadget shopping app',
    platform: 'Mobile app',
    status: 'Wireframes and final UI',
    cover: '/work/powerpay/05.jpg',
    summary: 'An online gadget store for Nigerian shoppers, designed from grey wireframes through to a finished checkout.',
    problem:
      'Phones and earbuds are expensive purchases. The cart in this design reaches ₦1,171,000, so every step between browsing and paying has to feel clear and safe, or people will leave.',
    decisions: [
      'I wireframed all eleven screens in neutral grey first, so the flow from splash to order confirmation was settled before any brand colour was added.',
      'The payment screen offers Card, USSD and Wallet as three tabs, because a single card form does not fit how many people in Nigeria pay.',
      'The total stays visible from the cart through checkout to the final button, which reads Pay ₦1,171,000, so the amount never changes without the person noticing.',
      'The finished UI uses a strong red and one banner for deals, and keeps product photography large so the gadgets sell themselves.',
    ],
    sections: [
      { heading: 'Final screens', layout: 'wide', images: [i('powerpay', 5, 'All PowerPay screens: splash, onboarding, login, home, categories, product list, details, cart, checkout, payment and confirmation')] },
      {
        heading: 'Wireframes',
        layout: 'phones',
        images: [7, 6, 8, 15, 16, 14, 13, 12, 11, 10, 9].map((n) => i('powerpay', n, 'PowerPay wireframe screen')),
      },
    ],
  },
  {
    slug: 'mealgo',
    title: 'MealGo',
    type: 'Food delivery app',
    platform: 'Mobile app',
    status: 'Final UI',
    cover: '/work/mealgo/21.jpg',
    summary: 'A delivery app for Nigerian meals, from rice and stew to egusi with pounded yam, ordered in a few taps.',
    problem:
      'Most food apps are built around fast food menus. MealGo needed to show local dishes with the right photos, naira prices and the choices people really make, like how spicy the stew should be.',
    decisions: [
      'The home screen leads with a promotion and a recommended row, then a search bar, so first-time users see what to order before they have to type.',
      'Spice level and add-ons such as extra chicken or plantain are chosen on the dish page, so the cart is already correct when it opens.',
      'Orange is the only action colour. Every button that moves the order forward uses it, and everything else stays neutral.',
      'Checkout shows the default delivery address, the order summary and payment methods including bank transfer on one screen.',
    ],
    sections: [
      { layout: 'wide', images: [i('mealgo', 22, 'MealGo welcome screen'), i('mealgo', 21, 'MealGo home screen and menu list'), i('mealgo', 19, 'MealGo dish page, cart, checkout and order placed screens')] },
    ],
  },
  {
    slug: 'super-app',
    title: 'Ride, delivery, travel and food',
    type: 'Super app',
    platform: 'Mobile app',
    status: 'Concept',
    cover: '/work/superapp/18.jpg',
    summary: 'A single home screen for four everyday services, with a dark interface and one warm accent.',
    problem:
      'People switch between separate apps to get a ride, send a parcel, book travel and order food. This concept puts those four services on one screen without making it feel crowded.',
    decisions: [
      'Four large tiles sit in an orange panel at the top, each with its own image, so the services are recognised by picture before text.',
      'The Where to? field has a Now selector built in, so a ride can be ordered now or scheduled without opening another screen.',
      'Recent destinations sit under the search field, which makes the most common trip a single tap.',
      'The Activity screen puts a map card for the latest trip above a list of past trips with the vehicle shown beside each one.',
    ],
    sections: [{ layout: 'wide', images: [i('superapp', 18, 'Super app home screen with Ride, Delivery, Travel and Food tiles'), i('superapp', 20, 'Super app activity screen with trip history'), i('superapp', 17, 'Home and activity screens side by side')] }],
  },
  {
    slug: 'ride-onboarding',
    title: 'Ride-hailing onboarding',
    type: 'Onboarding redesign',
    platform: 'Mobile app',
    status: 'Concept study',
    cover: '/work/waymo/27.jpg',
    summary: 'A step-by-step sign-up for a driverless ride service, from permissions to the first booking screen.',
    problem:
      'Joining a ride service means agreeing to permissions, terms and phone verification before seeing anything useful. The aim was to ask for each thing once, in plain words, and get the person to a booking screen quickly.',
    decisions: [
      'Each permission, location and notifications, has its own heading and a sentence on why it is needed.',
      'Terms are on one screen with a single I agree to all button, instead of several checkboxes.',
      'The phone number step shows the numeric keypad straight away, and the code screen has six large boxes.',
      'Grey placeholder blocks appear while the home screen loads, then it opens with the arrival time as its headline.',
    ],
    note: 'This is a personal concept study of an existing service. It is not affiliated with the company and is not client work.',
    sections: [{ layout: 'wide', images: [27, 28, 29, 30].map((n) => i('waymo', n, 'Ride service onboarding screens')) }],
  },
  {
    slug: 'opal',
    title: 'Opal',
    type: 'Sign-in and profile',
    platform: 'Mobile app',
    status: 'Concept',
    cover: '/work/opal/24.jpg',
    summary: 'A dark sign-in screen and a social profile page for a mobile app.',
    problem:
      'Sign-in is often the first screen a person sees. This concept keeps it short, with email and password at the top and quicker routes below, then moves straight into a profile that shows who someone is at a glance.',
    decisions: [
      'Email sign-in comes first. Sign in with Apple and Sign in with phone are separate full-width buttons below it.',
      'A Skip link lets people look around before they commit to an account.',
      'The profile page has a banner, avatar, short bio, follower counts and tabs for Posts, Replies, Highlights, Media and Likes.',
      'The bottom bar floats above the feed and has four icons only.',
    ],
    sections: [{ layout: 'wide', images: [i('opal', 26, 'Opal sign-in screen'), i('opal', 25, 'Profile screen'), i('opal', 24, 'Sign-in and profile screens')] }],
  },
  {
    slug: 'workflow-canvas',
    title: 'Workflow automation canvas',
    type: 'Automation builder',
    platform: 'Web app',
    status: 'Concept',
    cover: '/work/workflow/23.jpg',
    summary: 'A node-based editor for connecting apps like Slack, Notion, Google Drive and Discord into automated workflows.',
    problem:
      'A workflow with a dozen steps is hard to follow as a list. A canvas lets people see how data moves from one app to the next, but it needs structure so it does not turn into clutter.',
    decisions: [
      'Each app is a rounded node in its own soft colour, with the action named underneath, so a step can be identified at a glance.',
      'Connectors carry a small edit handle where a condition or mapping can be changed.',
      'The left rail holds recently used apps. The right panel has search and groups triggers and actions into collapsible sections.',
      'A bottom toolbar keeps Run once, save, settings and zoom within reach without covering the canvas.',
    ],
    sections: [{ layout: 'wide', images: [i('workflow', 23, 'Workflow automation canvas with connected app nodes and a tools panel')] }],
  },
  {
    slug: 'spotstash',
    title: 'SpotStash',
    type: 'Place-saving app',
    platform: 'Mobile app',
    status: 'Concept',
    cover: '/work/spotstash/cover.jpg',
    summary: 'Onboarding for an app that saves places from your camera or from other apps.',
    problem:
      'The app exists to save a place quickly. Asking for an account before showing that would get in the way, so the flow is built to be short and skippable.',
    decisions: [
      'A black screen with one glowing lime button gives every step a single clear action.',
      'Account creation is offered as a phone number with Skip next to it, so people can save a spot first and register later.',
      'The code step uses six separate boxes and a resend option, and the last screen is a short confirmation.',
    ],
    sections: [{ layout: 'phones', images: [0, 1, 2, 3, 4].map((n) => i('spotstash', n, 'SpotStash onboarding screen')) }],
  },
]
