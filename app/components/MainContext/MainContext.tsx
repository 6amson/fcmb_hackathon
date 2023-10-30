"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface MainContextTypes {
  incomingCollateralRequest: boolean;
  setIncomingCollateralRequest: Dispatch<SetStateAction<boolean>>;
  walletAmount: number;
  setWalletAmount: Dispatch<SetStateAction<number>>;
  mainPayload: {
    amount: number;
    stock: string;
  };
  overdraftCredit: number;
  setOverDraftCredit: Dispatch<SetStateAction<any>>;
  setMainPayload: Dispatch<SetStateAction<any>>;
  sharesData: any;
  setSharesData: Dispatch<SetStateAction<any>>;
}

interface MainContextProps {
  children: React.ReactNode;
}

export const MainContext = createContext<MainContextTypes | undefined>(
  undefined
);

export default function MainContextProvider(props: MainContextProps) {
  const [incomingCollateralRequest, setIncomingCollateralRequest] =
    useState(false);
  const [walletAmount, setWalletAmount] = useState(250000);
  const [overdraftCredit, setOverDraftCredit] = useState(25000);
  const [mainPayload, setMainPayload] = useState({
    amount: 0,
    stock: "",
  });
  const [sharesData, setSharesData] = useState({
    nestle: {
      stockOwned: 50,
      invested: 200000,
      sharesValuation: 260000,
      sharePrice: 2000,
    },
    Bolt: {
      stockOwned: 50,
      invested: 200000,
      sharesValuation: 260000,
      sharePrice: 2000,
    },
  });
  return (
    <MainContext.Provider
      value={{
        incomingCollateralRequest,
        setIncomingCollateralRequest,
        mainPayload,
        setMainPayload,
        setWalletAmount,
        walletAmount,
        overdraftCredit,
        setOverDraftCredit,
        setSharesData,
        sharesData,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
