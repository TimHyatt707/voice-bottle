import React from "react";
import Header from "./HeaderComponent";
import MessagesList from "./MessagesList";
import MessagesPageLayout from "./MessagesPageLayout";

export default function MessagesPage({
  id,
  markers,
  token,
  getPins,
  onDeletePin
}) {
  return (
    <MessagesPageLayout>
      <Header title="Messages" />
      <MessagesList
        id={id}
        markers={markers}
        token={token}
        getPins={getPins}
        onDeletePin={onDeletePin}
      />
    </MessagesPageLayout>
  );
}
