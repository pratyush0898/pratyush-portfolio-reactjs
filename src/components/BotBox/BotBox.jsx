import React, { useEffect } from 'react';

const BotChat = () => {
  useEffect(() => {
    // Inject the Botpress webchat script
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Inject the Botpress webchat config script
    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/177c8593-9226-4e0f-9282-b02c6ca83e86/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);

    // Initialize the Botpress webchat
    script1.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Pratyush",
        "botConversationDescription": "This chatbot was built by nvmPratyush",
        "botId": "177c8593-9226-4e0f-9282-b02c6ca83e87",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "177c8593-9226-4e0f-9282-b02c6ca83e86",
        "webhookId": "72cc58f5-69ee-47be-94a8-c33b5c73e70d",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "botbox",
        "frontendVersion": "v1",
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb",
        "allowedOrigins": []
      });
    };

    return () => {
      // Cleanup scripts on component unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default BotChat;
