# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-15-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (377)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_frameworks_base]** Fix IllegalArgumentException under PolicySerializers *(ID: [513734](https://review.lineageos.org/c/513734))*
- **[LineageOS/android_frameworks_base]** Fix crash in getOverrideLocaleConfig when package is not found *(ID: [513733](https://review.lineageos.org/c/513733))*
- **[LineageOS/android_frameworks_base]** Fix lock-screen bypass via default USB functions on timeout *(ID: [513732](https://review.lineageos.org/c/513732))*
- **[LineageOS/android_frameworks_base]** Fix shell command vulnerability in WindowManagerService *(ID: [513729](https://review.lineageos.org/c/513729))*
- **[LineageOS/android_frameworks_base]** Fix integer overflow in ZipFileRO::getEntryFileName *(ID: [513721](https://review.lineageos.org/c/513721))*
- **[LineageOS/android_frameworks_base]** [Accessibility] Fix metadata spoofing in setAccessibilityWindowAttributes *(ID: [513715](https://review.lineageos.org/c/513715))*
- **[LineageOS/android_frameworks_base]** RESTRICT AUTOMERGE: Fix integer underflow vulnerability in PduParser *(ID: [513714](https://review.lineageos.org/c/513714))*
- **[LineageOS/android_packages_apps_Settings]** Fix Background Activity Launch (BAL) bypass in AddAccountSettings *(ID: [513711](https://review.lineageos.org/c/513711))*
- **[LineageOS/android_kernel_xiaomi_sdm660]** Revert "msm: ADSPRPC: Restrict untrusted applications from attaching to GuestOS" *(ID: [508984](https://review.lineageos.org/c/508984))*
- **[LineageOS/android_kernel_xiaomi_sdm660]** Merge remote-tracking branch 'sdm660/lineage-20' into lineage-20 *(ID: [508982](https://review.lineageos.org/c/508982))*
- **[LineageOS/android_kernel_qcom_sdm660]** Partially revert "BACKPORT: kbuild: add all Clang-specific flags unconditionally" *(ID: [513676](https://review.lineageos.org/c/513676))*
- **[LineageOS/android_kernel_qcom_sdm660]** Partially reapply "AndroidKernel: Add LLVM support for Kernel" *(ID: [513710](https://review.lineageos.org/c/513710))*
- **[LineageOS/android_kernel_qcom_sm8350]** msm: camera: isp: Fix mem leak due mem_kdup usage *(ID: [513707](https://review.lineageos.org/c/513707))*
- **[LineageOS/android_kernel_qcom_sm8250]** Partially revert "BACKPORT: kbuild: add all Clang-specific flags unconditionally" *(ID: [513709](https://review.lineageos.org/c/513709))*
- **[LineageOS/android_kernel_qcom_sm8250]** Partially reapply "AndroidKernel: Add LLVM support for Kernel" *(ID: [513708](https://review.lineageos.org/c/513708))*
- **[LineageOS/android_kernel_oneplus_sm8350]** msm: camera: isp: Free the bw_config copy in the generic blob handler *(ID: [510839](https://review.lineageos.org/c/510839))*
- **[LineageOS/android_packages_services_Mms]** MmsService: Fix phone-uid confused deputy vulnerability on ContentProvider *(ID: [513706](https://review.lineageos.org/c/513706))*
- **[LineageOS/android_packages_providers_TelephonyProvider]** Fix permission bypass with empty projection array *(ID: [513702](https://review.lineageos.org/c/513702))*
- **[LineageOS/android_packages_modules_Wifi]** Fix LOHS BSSID configuration validation bypass *(ID: [513701](https://review.lineageos.org/c/513701))*
- **[LineageOS/android_packages_modules_Wifi]** Summary: Fix permission bypass in WifiP2pServiceImpl *(ID: [513700](https://review.lineageos.org/c/513700))*
- **[LineageOS/android_packages_modules_Wifi]** Fix package spoofing in getMessenger *(ID: [513699](https://review.lineageos.org/c/513699))*
- **[LineageOS/android_packages_modules_Bluetooth]** Fix L2CAP heap overflow by enforcing minimum MPS *(ID: [513698](https://review.lineageos.org/c/513698))*
- **[LineageOS/android_packages_apps_Nfc]** Fix TagService access control without AIDL changes *(ID: [513697](https://review.lineageos.org/c/513697))*
- **[LineageOS/android_hardware_interfaces]** Add model input/output out-of-bounds validation tests *(ID: [513696](https://review.lineageos.org/c/513696))*
- **[LineageOS/android_hardware_interfaces]** Fix CAS HAL integer truncation vulnerability *(ID: [513695](https://review.lineageos.org/c/513695))*
- **[LineageOS/android_frameworks_opt_telephony]** [RESTRICT AUTOMERGE] [Telephony] Fix RCS config credential leak via ISub *(ID: [513693](https://review.lineageos.org/c/513693))*
- **[LineageOS/android_frameworks_native]** Fix OOB read and UAF in InputDispatcher::flushSensor *(ID: [513692](https://review.lineageos.org/c/513692))*
- **[LineageOS/android_frameworks_av]** Fix stack buffer overflow in LWOmxNode::getParameter and getConfig *(ID: [513690](https://review.lineageos.org/c/513690))*
- **[LineageOS/android_frameworks_av]** Fix unbounded recursion in MPEG4Source::parseChunk *(ID: [513689](https://review.lineageos.org/c/513689))*
- **[LineageOS/android_frameworks_av]** Fix stack-buffer-overflow in StagefrightMetadataRetriever *(ID: [513688](https://review.lineageos.org/c/513688))*

</details>

## 📱 Línea Motorola Activa (5)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_miami]** Revert "miami: audio: Add missing Fluence NN mixer paths" *(ID: [513659](https://review.lineageos.org/c/513659))*
- **[LineageOS/android_device_motorola_fogos]** Revert "fogos: audio: Add missing Fluence NN mixer paths" *(ID: [513658](https://review.lineageos.org/c/513658))*
- **[LineageOS/android_device_motorola_fogo]** Revert "fogo: audio: Add missing Fluence NN mixer paths" *(ID: [513657](https://review.lineageos.org/c/513657))*
- **[LineageOS/android_device_motorola_bangkk]** Revert "bangkk: audio: Add missing Fluence NN mixer paths" *(ID: [513656](https://review.lineageos.org/c/513656))*
- **[LineageOS/android_device_motorola_sm6375-common]** sm6375-common: Disable ro.vendor.audio.sdk.fluence.nn.enabled *(ID: [513655](https://review.lineageos.org/c/513655))*

</details>

---
*Generado automáticamente por Ra Pulse*
