# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-21-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (207)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_device_osom_ingot]** ingot: Fix charge control on 6.6 *(ID: [505508](https://review.lineageos.org/c/505508))*
- **[LineageOS/android_hardware_lineage_generic-ims]** carriersettings: Disable EVS support by default *(ID: [509503](https://review.lineageos.org/c/509503))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: intf/audio/mainline: Use the stock init service names *(ID: [509522](https://review.lineageos.org/c/509522))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: intf/audio/mainline: Offer only what the PCM can carry *(ID: [509414](https://review.lineageos.org/c/509414))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: intf/audio/mainline: Never move an input position back *(ID: [509413](https://review.lineageos.org/c/509413))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: intf/audio/mainline: Count only real HBR refusals *(ID: [508337](https://review.lineageos.org/c/508337))*
- **[LineageOS/android_hardware_mainline_common]** mainline/common: intf/audio/mainline: Pack DTS-HD and TrueHD with FFmpeg *(ID: [505580](https://review.lineageos.org/c/505580))*
- **[LineageOS/android_hardware_motorola]** motorola: packages: Add MotoFaceBridge *(ID: [509511](https://review.lineageos.org/c/509511))*
- **[LineageOS/android_hardware_motorola]** motorola: aidl: face: Add face unlock HAL wrapper *(ID: [509512](https://review.lineageos.org/c/509512))*
- **[LineageOS/android_hardware_motorola]** motorola: packages: Add moto-face-framework for Motorola face unlock *(ID: [509510](https://review.lineageos.org/c/509510))*
- **[LineageOS/android_hardware_motorola]** motorola: interfaces: Add face unlock bridge AIDL *(ID: [509509](https://review.lineageos.org/c/509509))*
- **[LineageOS/android_hardware_motorola]** motorola: sensors: add ALS filter sub-HAL to ignore notification LED bleed *(ID: [506320](https://review.lineageos.org/c/506320))*
- **[LineageOS/android_kernel_qcom_sm8250]** fuse-bpf: Pass backing vfsmount to sdcardfs *(ID: [506260](https://review.lineageos.org/c/506260))*
- **[LineageOS/android_kernel_qcom_sm8250]** sdcardfs: Return negative dentries for missing names *(ID: [506261](https://review.lineageos.org/c/506261))*
- **[LineageOS/android_kernel_qcom_sm8250]** sdcardfs: Isolate Android/{data,obb} outside the default view *(ID: [506262](https://review.lineageos.org/c/506262))*
- **[LineageOS/android_kernel_qcom_sm8250]** Reapply "arm64: configs: vendor: Enable CONFIG_FUSE_BPF" *(ID: [496134](https://review.lineageos.org/c/496134))*
- **[LineageOS/android_hardware_samsung]** aidl: sensors: Allow hiding the device orientation sensor *(ID: [507778](https://review.lineageos.org/c/507778))*
- **[LineageOS/android_hardware_samsung]** aidl: sensors: Allow flipping device orientation while folded *(ID: [507777](https://review.lineageos.org/c/507777))*
- **[LineageOS/android_hardware_oplus]** oplus: vibrator: Add LiveTap AIDL vibrator service *(ID: [503935](https://review.lineageos.org/c/503935))*
- **[LineageOS/android_kernel_razer_sdm845]** BACKPORT: disp: msm: sde: avoid rc lock deadlock during esd failure *(ID: [509359](https://review.lineageos.org/c/509359))*
- **[LineageOS/android_kernel_razer_sdm845]** arm64: dts: rc2: Drop 30Hz and 40Hz refresh rates *(ID: [509358](https://review.lineageos.org/c/509358))*
- **[LineageOS/android_hardware_lineage_generic-ims]** carriersettings: Reload configs when the override changes *(ID: [509502](https://review.lineageos.org/c/509502))*
- **[LineageOS/android_device_motorola_mona]** mona: Fix invalid usage of log utility *(ID: [509436](https://review.lineageos.org/c/509436))*
- **[LineageOS/android_device_motorola_sm6475-common]** sm6475-common: Fix loading USB audio AIDL interface with prebuilt HAL *(ID: [509477](https://review.lineageos.org/c/509477))*
- **[LineageOS/android_device_motorola_sm6475-common]** sm6475-common: gps: Fix format specifiers *(ID: [509461](https://review.lineageos.org/c/509461))*
- **[LineageOS/android_device_motorola_sm6475-common]** sm6475-common: gps: Fix unqualified-std-cast-call warning *(ID: [509460](https://review.lineageos.org/c/509460))*
- **[LineageOS/android_kernel_oneplus_sm8650]** Merge remote-tracking branch 'sm8650/lineage-22.2' into HEAD *(ID: [505557](https://review.lineageos.org/c/505557))*
- **[LineageOS/android_kernel_oneplus_sm8650]** modules: Drop mem-offline.ko *(ID: [505558](https://review.lineageos.org/c/505558))*
- **[LineageOS/android_kernel_oneplus_sm8650-modules]** Merge remote-tracking branch 'sm8650-modules/lineage-22.2' into HEAD *(ID: [508589](https://review.lineageos.org/c/508589))*
- **[LineageOS/android_tools_extract-utils]** extract_utils: Add Rust symbol disambiguator fixup *(ID: [509347](https://review.lineageos.org/c/509347))*

</details>

## 📱 Línea Motorola Activa (109)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_smith]** smith: Tweak inner display status bar for usability *(ID: [509263](https://review.lineageos.org/c/509263))*
- **[LineageOS/android_device_motorola_smith]** smith: Increase outer display status bar padding *(ID: [509262](https://review.lineageos.org/c/509262))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [507356](https://review.lineageos.org/c/507356))*
- **[LineageOS/android_device_motorola_smith]** smith: Add eUICC support *(ID: [509314](https://review.lineageos.org/c/509314))*
- **[LineageOS/android_hardware_motorola]** motorola: packages: Add MotoFaceBridge *(ID: [509511](https://review.lineageos.org/c/509511))*
- **[LineageOS/android_hardware_motorola]** motorola: aidl: face: Add face unlock HAL wrapper *(ID: [509512](https://review.lineageos.org/c/509512))*
- **[LineageOS/android_hardware_motorola]** motorola: packages: Add moto-face-framework for Motorola face unlock *(ID: [509510](https://review.lineageos.org/c/509510))*
- **[LineageOS/android_hardware_motorola]** motorola: interfaces: Add face unlock bridge AIDL *(ID: [509509](https://review.lineageos.org/c/509509))*
- **[LineageOS/android_hardware_motorola]** motorola: sensors: add ALS filter sub-HAL to ignore notification LED bleed *(ID: [506320](https://review.lineageos.org/c/506320))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Commonize blobs for Face Unlock *(ID: [507958](https://review.lineageos.org/c/507958))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Frameworks: Tune low-lux auto-brightness curve and debounce *(ID: [506065](https://review.lineageos.org/c/506065))*
- **[LineageOS/android_device_motorola_mona]** mona: Build android.hardware.biometrics.fingerprint-service.moto *(ID: [509443](https://review.lineageos.org/c/509443))*
- **[LineageOS/android_device_motorola_mona]** mona: Enable display cutout protection *(ID: [509442](https://review.lineageos.org/c/509442))*
- **[LineageOS/android_device_motorola_mona]** mona: Adjust power button position *(ID: [509441](https://review.lineageos.org/c/509441))*
- **[LineageOS/android_device_motorola_mona]** mona: Update udfps props *(ID: [509440](https://review.lineageos.org/c/509440))*
- **[LineageOS/android_device_motorola_mona]** mona: Build com.motorola.hardware.biometric.fingerprint-V2-ndk *(ID: [509439](https://review.lineageos.org/c/509439))*
- **[LineageOS/android_device_motorola_mona]** mona: Wire up StylusKeyHandler *(ID: [509438](https://review.lineageos.org/c/509438))*
- **[LineageOS/android_device_motorola_mona]** mona: Bump fingerprint services to V4 *(ID: [509437](https://review.lineageos.org/c/509437))*
- **[LineageOS/android_device_motorola_mona]** mona: Fix invalid usage of log utility *(ID: [509436](https://review.lineageos.org/c/509436))*
- **[LineageOS/android_device_motorola_mona]** mona: sepolicy: Rework policies for moto services *(ID: [509435](https://review.lineageos.org/c/509435))*
- **[LineageOS/android_device_motorola_mona]** mona: Rename log function to notice *(ID: [509434](https://review.lineageos.org/c/509434))*
- **[LineageOS/android_device_motorola_mona]** mona: Selective updates for init from stock *(ID: [509433](https://review.lineageos.org/c/509433))*
- **[LineageOS/android_device_motorola_mona]** mona: Update overlays *(ID: [509432](https://review.lineageos.org/c/509432))*
- **[LineageOS/android_device_motorola_mona]** mona: Update sku manifests *(ID: [509431](https://review.lineageos.org/c/509431))*
- **[LineageOS/android_device_motorola_mona]** mona: Import audio configs *(ID: [509430](https://review.lineageos.org/c/509430))*
- **[LineageOS/android_device_motorola_mona]** mona: Import selected props from W1VAS36.62-22-16-1-18 *(ID: [509429](https://review.lineageos.org/c/509429))*
- **[LineageOS/android_device_motorola_mona]** mona: Update proprietary files from W1VAS36.62-22-16-1-18 *(ID: [509428](https://review.lineageos.org/c/509428))*
- **[LineageOS/android_device_motorola_mona]** mona: Update screen dimensions for boot animation *(ID: [509427](https://review.lineageos.org/c/509427))*
- **[LineageOS/android_device_motorola_mona]** mona: Update screen density *(ID: [509426](https://review.lineageos.org/c/509426))*
- **[LineageOS/android_device_motorola_mona]** mona: Update Board and Shipping API level *(ID: [509425](https://review.lineageos.org/c/509425))*

</details>

---
*Generado automáticamente por Ra Pulse*
