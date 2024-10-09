To run an Android emulator using the terminal on your Mac, follow these steps:

### 1. **Ensure Android SDK is Installed**:
Make sure that Android Studio installed the Android SDK and Emulator tools. You can verify this in Android Studio under **Preferences > Appearance & Behavior > System Settings > Android SDK**.

### 2. **Add Android SDK to PATH**:
You'll need to add the Android SDK tools to your system’s PATH for terminal access.

Open your terminal and run:

```bash
nano ~/.bash_profile
```

or if you're using `zsh` (default for newer macOS versions):

```bash
nano ~/.zshrc
```

Add the following lines (replace `/Users/your-username/` with your actual username):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
```

Save the file and apply the changes by running:

```bash
source ~/.bash_profile
```

or for `zsh`:

```bash
source ~/.zshrc
```

### 3. **List Available Emulators**:
Now that the SDK tools are available, you can list all the installed Android Virtual Devices (AVDs) by running:

```bash
emulator -list-avds
```

This will display the names of your available emulators.

### 4. **Start an Emulator**:
To start a specific emulator, use the following command (replace `emulator_name` with the name of your AVD from the previous step):

```bash
emulator @emulator_name
```

Example:

```bash
emulator @Pixel_3a_API_33_arm64-v8a
```

### 5. **Verify the Emulator is Running**:
Once the emulator is running, you can verify it's connected using:

```bash
adb devices
```

This should list the running emulator.

Now you can run the emulator via the terminal whenever needed!