import { defineStore } from "pinia";
import { ref } from "vue";

export const useOptionsStore = defineStore("options", () => {
  const defaultOptions = {
    character: {
      id: "",
      image: "",
      owner: {
        name: "",
        profile: "",
      },
    },
    must_comment: false,
    comment_points: 1,
    must_subscribe: false,
    subscribe_points: 1,
  };

  const characters = ref(null);

  const resetCharacter = (character) => {
    let characterId = character.id;

    let characterIdx = characters.value.findIndex(
      (chr) => chr.id === characterId
    );
    let newOpts = defaultOptions;
    newOpts.character_id = characterId;

    characters.value[characterIdx] = newOpts;
  };

  const updateCharacter = (character) => {
    let characterId = character.id;

    let characterIdx = characters.value.findIndex(
      (chr) => chr.id === characterId
    );

    characters.value[characterIdx] = character;
  };

  const removeCharacter = (character) => {
    let characterId = character.id;

    characters.value = characters.value.filter((chr) => chr.id !== characterId);
  };

  return { characters, resetCharacter, updateCharacter, removeCharacter };
});
