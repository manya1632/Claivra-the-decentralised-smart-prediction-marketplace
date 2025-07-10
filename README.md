# Claivra - The Decentralized Smart Prediction Marketplace

Claivra is a cutting-edge decentralized prediction marketplace built on Ethereum blockchain technology. Our platform offers users a transparent, secure, and fair environment for creating and participating in prediction markets.

## How It Works

### Blockchain Integration

Claivra leverages blockchain technology for maximum transparency and security:

- **Smart Contracts:** All core functionality runs on Ethereum smart contracts, ensuring rules are executed exactly as programmed without manipulation.
- **On-Chain Transactions:** Every bet, quiz creation, and result declaration is stored immutably on the blockchain.
- **Decentralized Wallet Integration:** Connect with MetaMask to interact with the platform securely.

### Key Features

1. **Immutable Records:** All tickets, bets, and transactions are permanently recorded on the blockchain.
2. **Transparent Fund Management:** Smart contracts handle all funds according to predefined rules.
3. **Automated Payouts:** Winners automatically receive funds when prediction results are confirmed.
4. **Role-Based System:** Users can register as Buyers, Organizers, or Admins with different permissions.

## Try It Live!

The platform is deployed and ready to use:

1. **Visit:** [Claivra Prediction Marketplace](https://claivra.vercel.app)
2. **Connect Your Wallet:**
   - Install MetaMask browser extension
   - Switch to the **Sepolia Test Network**
   - Click "Connect Wallet" on the website
3. **Get Started:**
   - Create an account
   - Browse active prediction markets
   - Create your own prediction market or place bets

## Local Development

This project consists of two main components:

### Blockchain (Smart Contracts)

For smart contract development and testing, refer to the dedicated README in the `blockchain` directory. Here's a quick overview:

```bash
# Navigate to blockchain directory
cd blockchain

# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Start local node
npx hardhat node

# Deploy to local network
npx hardhat run --network localhost scripts/deploy.js
```

### Frontend (Web Application)

The frontend is built with Next.js, Tailwind CSS, and ethers.js for blockchain integration:

```bash
# Navigate to web application directory
cd webMain/claivra

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

#### Frontend Architecture

- **Framework:** Next.js 13+ with App Router
- **Styling:** Tailwind CSS
- **Authentication:** Next-Auth with custom JWT implementation
- **Blockchain Integration:** ethers.js for smart contract interaction
- **Database:** MongoDB for off-chain data storage
- **State Management:** React Hooks with Context API

#### Key Frontend Features

1. **Role-Based UI:** Different interfaces for Buyers, Organizers, and Admins
2. **Wallet Integration:** Seamless MetaMask connection and transaction handling
3. **Responsive Design:** Mobile-friendly interface for all device types
4. **Real-Time Updates:** Live data refreshing for prediction markets and bets
5. **Offline Support:** Critical components work even with intermittent connectivity

## Connecting Local Frontend to Local Blockchain

1. Start a local Hardhat node:
   ```bash
   cd blockchain
   npx hardhat node
   ```

2. Deploy contracts to the local network (in a new terminal):
   ```bash
   cd blockchain
   npx hardhat run --network localhost scripts/deploy.js
   ```

3. Update contract address in `webMain/claivra/src/app/bc-utils/utils.ts` with the newly deployed address

4. Connect MetaMask to `localhost:8545` and import test accounts using the private keys provided by Hardhat

5. Start the frontend development server:
   ```bash
   cd webMain/claivra
   npm run dev
   ```

6. Visit `http://localhost:3000` to interact with the application

## Environment Setup

### Frontend Environment Variables (.env.local)

```
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
JWT_SECRET=your_jwt_secret

# Database
MONGODB_URI=your_mongodb_connection_string

# APIs
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_key

# Blockchain
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
```

## Security Assurance

- All funds are controlled by smart contracts, not by a central authority
- Platform rules are enforced by immutable code
- Every transaction is publicly verifiable
- Smart contracts undergo security audits
- Frontend implements proper authentication and authorization

## For Developers

- The blockchain component has its own detailed README with advanced testing and deployment instructions
- Contract ABIs are available in the `blockchain/artifacts` directory after compilation
- Frontend interfaces with contracts via ethers.js
- API routes are protected with proper authentication middleware

Experience the future of prediction markets with complete