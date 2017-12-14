import React from "react";
import RecordPageLayout from "./RecordPageLayout";
import RecordButton from "./RecordButton";
import Header from "./HeaderComponent";

export default function RecordPage({
  id,
  latitude,
  longitude,
  token,
  onSubmitMessage
}) {
  return (
    <RecordPageLayout>
      <Header title="Record" />
      <RecordButton
        onSubmitMessage={onSubmitMessage}
        id={id}
        latitude={latitude}
        longitude={longitude}
        token={token}
      />
    </RecordPageLayout>
  );
}
