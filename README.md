# **Spicetify Better Bloom Theme**

**A minimal and dynamic Bloom-inspired theme for Spicetify.**

## **Features:**

- **Auto updates (planned):** Bug fixes are addressed promptly to keep your theme experience smooth.
- **Dynamic background that adapts to album art:** Enjoy a visually engaging experience with a background that changes based on your current song album art.
- **Multiple color schemes:** Choose from a variety of color schemes to match your style (dark, light, dark-green, coffee, comfy, dark-fluent).
- **Easy installation via scripts or Spicetify Marketplace:** Choose the installation method that best suits you.

## Join the Community!

- **Discord:** [https://discord.gg/knXP88Zbph](https://discord.gg/knXP88Zbph)
- **GitHub Issues:** [https://github.com/sanoojes/better-bloom/issues](https://github.com/sanoojes/better-bloom/issues)

## **Installation**

### **Manual installation using Scripts (recomended):**

#### **Windows (Powershell)**

```powershell
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
iex "& { $(iwr -useb 'https://sanoojes.github.io/better-bloom/install/Better-Bloom.ps1') }"
```

#### **Linux/macOS (Bash)**

```sh
curl -fsSL https://raw.githubusercontent.com/sanoojes/better-bloom/main/install/install.sh | sh
```

### **Using Spicetify Marketplace (simpler installation):**

1. Install the `spicetify-marketplace` extension following its instructions: [https://github.com/spicetify/spicetify-themes](https://github.com/spicetify/spicetify-themes).
2. Search for "better-bloom" in the Spicetify Marketplace and click "Install."

### **Advanced Manual Installation:**:

1. **Download the repository:** Visit the Better Bloom GitHub repository: [https://github.com/sanoojes/better-bloom](https://github.com/sanoojes/better-bloom) and download the code as a ZIP archive.
2. **Locate Spicetify's Themes directory:** Use the command `spicetify path userdata` in your terminal/command prompt to find the path.
3. **Create the theme folder:** Inside the Themes directory, create a new folder named `better-bloom`.
4. **Extract theme files:** Extract the downloaded ZIP archive and move all files from the `src` subfolder to the `better-bloom` folder you created.
5. **Apply the theme:** Open your terminal/command prompt and run these commands (replace `<color_scheme>` with your desired scheme):

   ```bash
   spicetify config current_theme better-bloom
   spicetify config color_scheme <color_scheme>  # Example: dark, light, etc.
   spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 inject_theme_js 1
   spicetify apply
   ```

## **Customization**

### **Color scheme:**

- The default scheme is `dark`. You can change it using the command:

  ```bash
  spicetify config color_scheme <color_scheme>
  spicetify apply
  ```

Available schemes: `dark`, `light`, `darkgreen`, `coffee`, `comfy`, `violet`, `dark-fluent`, `dark-bloom`,`midnight-catppuccin`.

- If you installed via Marketplace, the color scheme can be changed directly in the theme options.

### **Accent color:**

1. Navigate to the Spicetify Themes directory using `spicetify path userdata` in your terminal.
2. Open the `better-bloom` folder.
3. Edit the `color.ini` file for your current color scheme (e.g., `color.dark.ini`).
4. Make your desired changes to the accent color values.
5. Run `spicetify apply` to apply the changes.

- If you installed via Marketplace, you can use the built-in Color.ini Editor for accent color adjustments.

## **Screenshots**

### **Dark (default) with Global nav**

![Base Dark with Global Nav](./assets/images/better-bloom-global-nav.webp)

### **Dark (default)**

![Base Dark Preview](./assets/images/base.webp)
![Dark Preview 1](./assets/images/better-bloom-dark0.webp)
![Dark Preview 0](./assets/images/better-bloom-dark.webp)
![Dark 1 Preview 2](./assets/images/better-bloom-dark1.webp)
![Dark 2 Preview 3](./assets/images/better-bloom-dark2.webp)

### **Light**

![Light Preview](./assets/images/better-bloom-light.webp)
![Light Preview 1](./assets/images/better-bloom-light1.webp)

### **Comfy**

![Comfy Preview](./assets/images/better-bloom-comfy.webp)
![Comfy Preview 1](./assets/images/better-bloom-comfy1.webp)

### **Darkgreen**

![DarkGreen Preview](./assets/images/better-bloom-darkgreen.webp)
![DarkGreen Preview 1](./assets/images/better-bloom-darkgreen1.webp)

### **Violet**

![Violet Preview](./assets/images/better-bloom-violet.webp)
![Violet Preview 1](./assets/images/better-bloom-violet1.webp)

### **Dark-Fluent**

![Dark-Fluent Preview](./assets/images/better-bloom-dark-fluent.webp)
![Dark-Fluent Preview 1](./assets/images/better-bloom-dark-fluent1.webp)

### **Dark-Bloom**

![Dark-Bloom Preview](./assets/images/better-bloom-dark-bloom.webp)
![Dark-Bloom Preview 1](./assets/images/better-bloom-dark-bloom1.webp)

### **Midnight-Catppuccin**

![midnight-catppuccin Preview](./assets/images/better-bloom-midnight-catppuccin.webp)
![midnight-catppuccin  Preview 1](./assets/images/better-bloom-midnight-catppuccin1.webp)

### Better Bloom Settings

![Settings Preview](./assets/images/settings.webp)

## License

[MIT License](LICENSE)

## TODO

[] add extentions doc
[] add new screenshots
[] implement the whole css and js
TODO: add icons, js, dynamic bg , settings , multilingual support etc..
