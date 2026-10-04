# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-04-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (229)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_xiaomi_sm8450-devicetrees]** qcom: Delete mem-offline node to fully disable PASR *(ID: [492920](https://review.lineageos.org/c/492920))*
- **[LineageOS/android_hardware_samsung]** packages: implement SamsungCallManager *(ID: [506121](https://review.lineageos.org/c/506121))*
- **[LineageOS/android_hardware_samsung]** shims: Use a shim for overriding g_sco_samplerate *(ID: [506122](https://review.lineageos.org/c/506122))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** display-drivers: Fix LHBM touch state handling *(ID: [506129](https://review.lineageos.org/c/506129))*
- **[LineageOS/android_system_nfc]** Fix bounds check underflow and GKI buffer leak in T4T write *(ID: [505984](https://review.lineageos.org/c/505984))*
- **[LineageOS/android_system_libufdt]** libufdt: Fix stack overflow risk in vendor qsort *(ID: [505986](https://review.lineageos.org/c/505986))*
- **[LineageOS/android_packages_providers_TelephonyProvider]** TelephonyProvider: Fix SQL injection in projection and sortOrder *(ID: [505993](https://review.lineageos.org/c/505993))*
- **[LineageOS/android_packages_providers_DownloadProvider]** RESTRICT AUTOMERGE Fix ZWSP path bypass in DownloadProvider *(ID: [505997](https://review.lineageos.org/c/505997))*
- **[LineageOS/android_packages_providers_DownloadProvider]** RESTRICT AUTOMERGE Fix DownloadProvider completed download security bypass *(ID: [505996](https://review.lineageos.org/c/505996))*
- **[LineageOS/android_packages_providers_DownloadProvider]** RESTRICT AUTOMERGE Fix path traversal vulnerability in DownloadStorageProvider *(ID: [505995](https://review.lineageos.org/c/505995))*
- **[LineageOS/android_packages_providers_ContactsProvider]** Fix size check bypass for case-mismatched columns *(ID: [505999](https://review.lineageos.org/c/505999))*
- **[LineageOS/android_packages_apps_Settings]** Fix confused deputy in Bluetooth settings dashboard *(ID: [506003](https://review.lineageos.org/c/506003))*
- **[LineageOS/android_frameworks_opt_telephony]** Fix ArrayIndexOutOfBoundsException in SIMRecords due to invalid EF_CFIS/EF_CFF *(ID: [506009](https://review.lineageos.org/c/506009))*
- **[LineageOS/android_frameworks_base]** [BACKPORT] Fix boot-loop vulnerability in setPermissionGrantState *(ID: [506018](https://review.lineageos.org/c/506018))*
- **[LineageOS/android_frameworks_base]** SystemUi UsbDialog: fix label vulnerability *(ID: [506014](https://review.lineageos.org/c/506014))*
- **[LineageOS/android_frameworks_base]** Fix URI grant persistence bypass *(ID: [506011](https://review.lineageos.org/c/506011))*
- **[LineageOS/android_frameworks_av]** Camera: Fix heap OOB read/write in camera mappers *(ID: [506021](https://review.lineageos.org/c/506021))*
- **[LineageOS/android_frameworks_av]** Fix MediaBuffer size-inflation off-by-32 bug *(ID: [506019](https://review.lineageos.org/c/506019))*
- **[LineageOS/android_device_samsung_sm7125-common]** sm7125-common: enable fixed `camera_module_t` layout *(ID: [506034](https://review.lineageos.org/c/506034))*
- **[LineageOS/android_hardware_samsung]** aidl: camera: fix `set_torch_mode_strength` for devices using UniHAL *(ID: [506033](https://review.lineageos.org/c/506033))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** fsa4480: Fix incorrect FSA4480 supply mode property handling. *(ID: [504923](https://review.lineageos.org/c/504923))*
- **[LineageOS/android_kernel_qcom_sm8150]** UPSTREAM:cgroup: get rid of cgroup_freezer_frozen_exit() *(ID: [506196](https://review.lineageos.org/c/506196))*
- **[LineageOS/android_kernel_qcom_sm8150]** UPSTREAM:cgroup: prevent spurious transition into non-frozen state *(ID: [506195](https://review.lineageos.org/c/506195))*
- **[LineageOS/android_vendor_lineage]** kernel: Add flag to set KCONFIG_EXT_PREFIX *(ID: [489817](https://review.lineageos.org/c/489817))*
- **[LineageOS/android_kernel_qcom_sm8250]** Reapply "arm64: configs: vendor: Enable CONFIG_FUSE_BPF" *(ID: [496134](https://review.lineageos.org/c/496134))*
- **[LineageOS/android_kernel_qcom_sm8250]** sdcardfs: Isolate Android/{data,obb} outside the default view *(ID: [506262](https://review.lineageos.org/c/506262))*
- **[LineageOS/android_kernel_qcom_sm8250]** sdcardfs: Return negative dentries for missing names *(ID: [506261](https://review.lineageos.org/c/506261))*
- **[LineageOS/android_kernel_qcom_sm8250]** fuse-bpf: Pass backing vfsmount to sdcardfs *(ID: [506260](https://review.lineageos.org/c/506260))*
- **[LineageOS/android_hardware_mediatek]** interfaces: bluetooth: audio: Add frozen version for each vendor *(ID: [506113](https://review.lineageos.org/c/506113))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** oplus: nfc: Add KBUILD_EXTRA_SYMBOLS to resolve cross-module symbols *(ID: [506219](https://review.lineageos.org/c/506219))*

</details>

## 📱 Línea Motorola Activa (24)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_xpeng]** xpeng: Increase auto brightness light debounce *(ID: [506060](https://review.lineageos.org/c/506060))*
- **[LineageOS/android_kernel_motorola_sm8550]** misc: Don't pull shmem_mapping() into the RichTap modules *(ID: [506153](https://review.lineageos.org/c/506153))*
- **[LineageOS/android_kernel_motorola_sm8550]** input: misc: qcom-hv-haptics: set custom effect max mv to richtap value *(ID: [506152](https://review.lineageos.org/c/506152))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: remove example primitives by qcom *(ID: [506150](https://review.lineageos.org/c/506150))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: import richtap effects *(ID: [506149](https://review.lineageos.org/c/506149))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: fix -Wreorder-init-list *(ID: [506148](https://review.lineageos.org/c/506148))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: use header library *(ID: [506147](https://review.lineageos.org/c/506147))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8475-common: Import qti vibrator effect and rename *(ID: [506146](https://review.lineageos.org/c/506146))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Update blobs from W1UANS36H.29-25-2-6 9d51f-e4bde5 *(ID: [506143](https://review.lineageos.org/c/506143))*
- **[LineageOS/android_device_motorola_avatrn]** avatrn: Update blobs from W1UANS36H.29-25-2-6 9d51f-e4bde5 *(ID: [506142](https://review.lineageos.org/c/506142))*
- **[LineageOS/android_device_motorola_beckham]** beckham: audio: Route audio Moto Mods through usb-headset paths *(ID: [505943](https://review.lineageos.org/c/505943))*
- **[LineageOS/android_kernel_motorola_sm8550]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [506084](https://review.lineageos.org/c/506084))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Frameworks: Tune low-lux auto-brightness curve and debounce *(ID: [506065](https://review.lineageos.org/c/506065))*
- **[LineageOS/android_device_motorola_beckham]** beckham: Bring back the prebuilt audio HAL *(ID: [506063](https://review.lineageos.org/c/506063))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Handle dt2w through power HAL extension *(ID: [479977](https://review.lineageos.org/c/479977))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Add common libqti-perfd-client to namespaces *(ID: [479978](https://review.lineageos.org/c/479978))*
- **[LineageOS/android_kernel_motorola_sm8250]** Merge remote-tracking branch 'sm8250/lineage-20' into HEAD *(ID: [505878](https://review.lineageos.org/c/505878))*
- **[LineageOS/android_kernel_motorola_sm6225]** arm64: configs: guamna: Build moto modules *(ID: [501509](https://review.lineageos.org/c/501509))*
- **[LineageOS/android_kernel_motorola_sm6225]** techpack: camera-bengal: Enable legacy camera fix for guamna *(ID: [501508](https://review.lineageos.org/c/501508))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: himax_v3_mmi: Fix CFI failure in module init *(ID: [501505](https://review.lineageos.org/c/501505))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [503084](https://review.lineageos.org/c/503084))*
- **[LineageOS/android_device_motorola_smith]** smith: Drop soundtrigger HAL *(ID: [505698](https://review.lineageos.org/c/505698))*
- **[LineageOS/android_device_motorola_smith]** smith: Use MMI touchscreen class to toggle dt2w [2/2] *(ID: [505697](https://review.lineageos.org/c/505697))*
- **[LineageOS/android_device_motorola_smith]** smith: overlay: Update deprecated screen power items *(ID: [505696](https://review.lineageos.org/c/505696))*

</details>

---
*Generado automáticamente por Ra Pulse*
