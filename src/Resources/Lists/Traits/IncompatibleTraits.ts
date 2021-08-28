import { CharacterTrait } from "Resources/Enums/Character/CharacterTrait";

export const IncompatibleTraits:CharacterTrait[][] = [
    [CharacterTrait.SuperImmune, CharacterTrait.Sickly],
    [CharacterTrait.Prosthophile, CharacterTrait.Prosthophobe],
    [CharacterTrait.Etherophobe, CharacterTrait.Etherophile],
    [CharacterTrait.PsychicallyDeaf, CharacterTrait.PsychicallyDull, CharacterTrait.PsychicallySensitive],
    [CharacterTrait.Beautiful, CharacterTrait.Pretty, CharacterTrait.Ugly, CharacterTrait.StaggeringlyUgly],
    [CharacterTrait.IronWilled, CharacterTrait.Nervous],
    [CharacterTrait.Sanguine, CharacterTrait.Optimist, CharacterTrait.Pessimist, CharacterTrait.Depressive],
    [CharacterTrait.Jogger, CharacterTrait.Slowpoke],
    [CharacterTrait.Industrious, CharacterTrait.Lazy, CharacterTrait.Slothful],
    [CharacterTrait.ChemicalFascination, CharacterTrait.Teetotaler],
    [CharacterTrait.Gourmand, CharacterTrait.Ascetic],
    [CharacterTrait.SlowLearner, CharacterTrait.FastLearner],
    [CharacterTrait.Kind, CharacterTrait.Psychopath],
]
