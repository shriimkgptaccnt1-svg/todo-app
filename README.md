# todo

A simple Android to-do app with two lists and a record of what you finished.

- **Short term** opens first. Swipe left for **Long term**, then **Done**.
- Tap the circle on the right to complete a task. It moves to **Done**, and **Undo** brings it back.
- Tap a task to edit it, set a due date, or move it to the other list.
- Drag the dots on the left to reorder.
- The small circle on the left shows how long the task has been waiting.
- **Done** shows today / last 7 days / all-time counts. Put a task back in Short term with ↺, delete it with the bin, or tap **Select** to delete several. Completed tasks are cleared after 90 days.

Tasks are stored on the phone only.

## Install on your phone

1. Open the [Releases page](../../releases/latest) on your phone.
2. Tap **todo.apk** to download it, then open it.
3. If Android asks, allow your browser to install apps, then tap **Install** (and **Install anyway** if Play Protect asks).

To update, install the newest APK from Releases over the old one. Your tasks are kept.

## How it is built

`src/index.html` is the whole app. [Capacitor](https://capacitorjs.com) wraps it as an Android app, and the GitHub Actions workflow in `.github/workflows/build-apk.yml` builds a signed APK on every push to `main` and publishes it on the Releases page.

To build locally (needs Node 22, JDK 21 and the Android SDK):

```bash
npm ci
npm run sync
cd android && ./gradlew assembleRelease
```
