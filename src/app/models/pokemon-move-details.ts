export interface MoveDetails {
  accuracy?: any;
  contest_combos?: any;
  contest_effect: Contesteffect;
  contest_type: Contesttype;
  damage_class: Contesttype;
  effect_chance?: any;
  effect_changes: any[];
  effect_entries: Effectentry[];
  flavor_text_entries: Flavortextentry[];
  generation: Contesttype;
  id: number;
  learned_by_pokemon: Contesttype[];
  machines: any[];
  meta: Meta;
  name: string;
  names: Name[];
  past_values: any[];
  power?: any;
  pp: number;
  priority: number;
  stat_changes: any[];
  super_contest_effect: Contesteffect;
  target: Contesttype;
  type: Contesttype;
}

export interface Name {
  language: Contesttype;
  name: string;
}

/**
 * You should not need the interfaces below
 */
interface Meta {
  ailment: Contesttype;
  ailment_chance: number;
  category: Contesttype;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits?: any;
  max_turns?: any;
  min_hits?: any;
  min_turns?: any;
  stat_chance: number;
}

interface Flavortextentry {
  flavor_text: string;
  language: Contesttype;
  version_group: Contesttype;
}

interface Effectentry {
  effect: string;
  language: Contesttype;
  short_effect: string;
}

interface Contesttype {
  name: string;
  url: string;
}

interface Contesteffect {
  url: string;
}
