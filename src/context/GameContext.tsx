"use client"
import { error } from "console";
import { createContext, useContext, useState, ReactNode } from "react";

type GameMode = "landing" | "waiting" | "drawing" | "guessing";

interface Player {
  id: string;
  bazarId?: string;
  name: string;
  image?: string;
  score?: number;
  isCreator?: boolean;
}

interface GameState {
  gameProcess: string;
  activeDrawer: string;
  currentRound: number;
  maxRounds: number;
  currentTimestamp: number;
}

interface GameContextType {
  mode: GameMode;
  setMode: (newState: GameMode) => void;
  currentPlayer: Player | null;
  setCurrentPlayer: (players: Player | null) => void;
  joinedPlayers: Player[];
  setJoinedPlayers: (players: Player[]) => void;
  gameState: GameState;
  setGameState: (gameState: GameState) => void;
  chosenWord: string;
  setChosenWord: (word: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<GameMode>("landing");
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [joinedPlayers, setJoinedPlayers] = useState<Player[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    gameProcess: "x8jlMimfLNqdBBSGgWFa3tVHE7o2KUIiI_HMiQnzZuk",
    activeDrawer: "",
    currentRound: 0,
    maxRounds: 0,
    currentTimestamp: 0,
  });
  const [chosenWord, setChosenWord] = useState<string>("");

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        currentPlayer,
        setCurrentPlayer,
        joinedPlayers,
        setJoinedPlayers,
        gameState,
        setGameState,
        chosenWord,
        setChosenWord,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
    const context = useContext(GameContext);
    if(!context){
        throw new Error("useGameContext must be used within a GameProvider")
    }
    return context;
}
