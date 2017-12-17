import React from "react";
import UpdateMessagePageLayout from "./UpdateMessagePageLayout";
import Header from "./HeaderComponent";
import MessageForm from "./MessageForm";

export default function UpdateMessagePage({
  onUpdateMessage,
  selectedPinId,
  token
}) {
  return (
    <UpdateMessagePageLayout>
      <Header title="Update" hasBack={true} />
      <MessageForm
        onUpdateMessage={onUpdateMessage}
        token={token}
        selectedPinId={selectedPinId}
      />
    </UpdateMessagePageLayout>
  );
}
