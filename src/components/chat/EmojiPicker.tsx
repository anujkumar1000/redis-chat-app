"use client";

import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

// Define a type for the emoji based on its expected properties
interface Emoji {
  native: string; // or whatever properties you expect
  emoji?: string; // optional, adjust based on what you need
  id?: string; // optional, adjust based on what you need
}


interface EmojiPickerProps {
  onChange: (emoji: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Picker
          emojiSize={18}
          data={data}
          maxFrequentRows={1}
          theme={theme === "dark" ? "dark" : "light"}
          // onEmojiSelect={(emoji: Emoji) => onChange(emoji.native)}
          onEmojiSelect={(emoji: Emoji) => {
            const emojiCharacter = emoji.native || emoji.emoji || emoji.id || ''; // Adjust as needed
            onChange(emojiCharacter);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
