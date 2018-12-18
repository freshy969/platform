// Labels can use a different set of brand colors than single stats or gauges

export enum LabelColorType {
  Preset = 'preset',
  Custom = 'custom',
}

export interface LabelColor {
  id: string
  hex: string
  name: string
  type: LabelColorType
}

export const PresetLabelColors = [
  {
    id: 'custom',
    hex: '#RRRRRR',
    name: 'Custom Hexcode',
    type: LabelColorType.Custom,
  },
  {
    id: 'label-preset-sapphire',
    hex: '#326BBA',
    name: 'Sapphire',
    type: LabelColorType.Preset,
  },
  {
    id: 'label-preset-ocean',
    hex: '#4591ED',
    name: 'Ocean',
    type: LabelColorType.Preset,
  },
  {
    id: 'label-preset-pool',
    hex: '#22ADF6',
    name: 'Pool',
    type: LabelColorType.Preset,
  },
  {
    id: 'label-preset-laser',
    hex: '#00C9FF',
    name: 'Laser',
    type: LabelColorType.Preset,
  },
  {
    id: 'label-preset-hydrogen',
    hex: '#6BDFFF',
    name: 'Hydrogen',
    type: LabelColorType.Preset,
  },
  {
    id: 'label-preset-neutrino',
    hex: '#BEF0FF',
    name: 'Neutrino',
    type: LabelColorType.Preset,
  },
]