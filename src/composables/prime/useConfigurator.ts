import { $t, updatePreset, updateSurfacePalette } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import Lara from "@primeuix/themes/lara";
import Nora from "@primeuix/themes/nora";
import { ref } from "vue";
import { primaryColors } from "./constantes/primary-colors";
import { surfaces } from "./constantes/surfaces";

export function useConfigurator() {
  const { layoutConfig, isDarkTheme } = useLayout();

  const presets: Record<string, any> = {
    Aura,
    Lara,
    Nora,
  };

  const preset = ref<string>(layoutConfig.preset);
  const presetOptions = ref(Object.keys(presets));

  const menuMode = ref(layoutConfig.menuMode);
  const menuModeOptions = ref([
    { label: "Static", value: "static" },
    { label: "Overlay", value: "overlay" },
  ]);

  const getPresetExt = () => {
    const color = primaryColors.value.find(
      (c) => c.name === layoutConfig.primary
    );

    if (color?.name === "noir") {
      return {
        semantic: {
          primary: {
            50: "{surface.50}",
            100: "{surface.100}",
            200: "{surface.200}",
            300: "{surface.300}",
            400: "{surface.400}",
            500: "{surface.500}",
            600: "{surface.600}",
            700: "{surface.700}",
            800: "{surface.800}",
            900: "{surface.900}",
            950: "{surface.950}",
          },
          colorScheme: {
            light: {
              primary: {
                color: "{primary.950}",
                contrastColor: "#ffffff",
                hoverColor: "{primary.800}",
                activeColor: "{primary.700}",
              },
              highlight: {
                background: "{primary.950}",
                focusBackground: "{primary.700}",
                color: "#ffffff",
                focusColor: "#ffffff",
              },
            },
            dark: {
              primary: {
                color: "{primary.50}",
                contrastColor: "{primary.950}",
                hoverColor: "{primary.200}",
                activeColor: "{primary.300}",
              },
              highlight: {
                background: "{primary.50}",
                focusBackground: "{primary.300}",
                color: "{primary.950}",
                focusColor: "{primary.950}",
              },
            },
          },
        },
      };
    } else {
      return {
        semantic: {
          primary: color?.palette,
          colorScheme: {
            light: {
              primary: {
                color: "{primary.500}",
                contrastColor: "#ffffff",
                hoverColor: "{primary.600}",
                activeColor: "{primary.700}",
              },
              highlight: {
                background: "{primary.50}",
                focusBackground: "{primary.100}",
                color: "{primary.700}",
                focusColor: "{primary.800}",
              },
            },
            dark: {
              primary: {
                color: "{primary.400}",
                contrastColor: "{surface.900}",
                hoverColor: "{primary.300}",
                activeColor: "{primary.200}",
              },
              highlight: {
                background:
                  "color-mix(in srgb, {primary.400}, transparent 84%)",
                focusBackground:
                  "color-mix(in srgb, {primary.400}, transparent 76%)",
                color: "rgba(255,255,255,.87)",
                focusColor: "rgba(255,255,255,.87)",
              },
            },
          },
        },
      };
    }
  };

  const updateColors = (type: string, color: any) => {
    if (type === "primary") {
      layoutConfig.primary = color.name;
    } else if (type === "surface") {
      layoutConfig.surface = color.name;
    }

    applyTheme(type, color);
  };

  const applyTheme = (type: string, color: any) => {
    if (type === "primary") {
      updatePreset(getPresetExt());
    } else if (type === "surface") {
      updateSurfacePalette(color.palette);
    }
  };

  const onPresetChange = () => {
    layoutConfig.preset = preset.value;
    const presetValue = presets[preset.value];
    const surfacePalette = surfaces.value.find(
      (s: any) => s.name === layoutConfig.surface
    )?.palette;

    $t()
      .preset(presetValue)
      .preset(getPresetExt())
      .surfacePalette(surfacePalette)
      .use({ useDefaultOptions: true });
  };

  const onMenuModeChange = () => {
    layoutConfig.menuMode = menuMode.value;
  };

  return {
    primaryColors,
    layoutConfig,
    isDarkTheme,
    surfaces,
    presetOptions,
    menuMode,
    menuModeOptions,
    updateColors,
    onPresetChange,
    onMenuModeChange,
  };
}
