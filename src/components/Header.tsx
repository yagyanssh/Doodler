import { ConnectButton } from "arweave-wallet-kit";

export default function Header() {
  return (
    <header className="w=full p-4 md:px-8">
      <nav className="flex justify-between item-center">
        <h1 className="text-2xl font=bold">SnakeGame</h1>
        <ConnectButton showBalance={false} />
      </nav>
    </header>
  );
}
