"use client"

import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useStoreModel } from "@/hooks/use-store-modal"; 

const SetupPage = () => {
  //directly call the state
  const onOpen = useStoreModel((state) => state.onOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);


    return (
      null
    );
  }

  export default SetupPage; 