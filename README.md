# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-09-19-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (156)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_frameworks_base]** SystemUI: Internet & Bluetooth dialog fixes *(ID: [503249](https://review.lineageos.org/c/503249))*
- **[LineageOS/android_system_libufdt]** libufdt: Fix stack overflow risk in vendor qsort *(ID: [503360](https://review.lineageos.org/c/503360))*
- **[LineageOS/android_packages_services_Telephony]** Fix StackOverflowError in SatelliteEntitlementController *(ID: [503356](https://review.lineageos.org/c/503356))*
- **[LineageOS/android_packages_services_Telecomm]** Fix privilege escalation in ACTION_CALL intent trampoline *(ID: [503354](https://review.lineageos.org/c/503354))*
- **[LineageOS/android_packages_services_Telecomm]** Fix MMI check bypass via leading whitespace in tel URI. *(ID: [503353](https://review.lineageos.org/c/503353))*
- **[LineageOS/android_packages_providers_TelephonyProvider]** TelephonyProvider: Fix SQL injection in projection and sortOrder *(ID: [503352](https://review.lineageos.org/c/503352))*
- **[LineageOS/android_packages_providers_DownloadProvider]** RESTRICT AUTOMERGE Fix ZWSP path bypass in DownloadProvider *(ID: [503349](https://review.lineageos.org/c/503349))*
- **[LineageOS/android_packages_providers_DownloadProvider]** RESTRICT AUTOMERGE Fix DownloadProvider completed download security bypass *(ID: [503348](https://review.lineageos.org/c/503348))*
- **[LineageOS/android_packages_providers_DownloadProvider]** RESTRICT AUTOMERGE Fix path traversal vulnerability in DownloadStorageProvider *(ID: [503347](https://review.lineageos.org/c/503347))*
- **[LineageOS/android_packages_modules_Telephony]** Fix server-triggered StackOverflowError in TS.43 phone number fetch *(ID: [503343](https://review.lineageos.org/c/503343))*
- **[LineageOS/android_packages_modules_Nfc]** Fix integer underflow in rw_ci_data_cback *(ID: [503341](https://review.lineageos.org/c/503341))*
- **[LineageOS/android_packages_modules_Nfc]** Fix heap buffer overflow in nfa_t4tnfcee_store_rx_buf *(ID: [503340](https://review.lineageos.org/c/503340))*
- **[LineageOS/android_packages_modules_Nfc]** Fix bounds check underflow and GKI buffer leak in T4T write *(ID: [503339](https://review.lineageos.org/c/503339))*
- **[LineageOS/android_packages_modules_Nfc]** Fix Heap OOBW in nfa_t4tnfcee_store_rx_buf() *(ID: [503337](https://review.lineageos.org/c/503337))*
- **[LineageOS/android_packages_modules_Bluetooth]** GATT: Fix notifications sent to remote device without security checks *(ID: [503335](https://review.lineageos.org/c/503335))*
- **[LineageOS/android_packages_apps_Settings]** Fix confused deputy in Bluetooth settings dashboard *(ID: [503331](https://review.lineageos.org/c/503331))*
- **[LineageOS/android_hardware_st_nfc]** Fix out-of-bounds write in stpropnci_process *(ID: [503326](https://review.lineageos.org/c/503326))*
- **[LineageOS/android_hardware_nxp_nfc]** Fix Use-After-Free in NXP NFC HAL timer teardown *(ID: [503325](https://review.lineageos.org/c/503325))*
- **[LineageOS/android_frameworks_opt_telephony]** Fix ArrayIndexOutOfBoundsException in SIMRecords due to invalid EF_CFIS/EF_CFF *(ID: [503324](https://review.lineageos.org/c/503324))*
- **[LineageOS/android_frameworks_base]** Fix silence-injection policy skip in VirtualAudioController *(ID: [503322](https://review.lineageos.org/c/503322))*
- **[LineageOS/android_frameworks_base]** Fix boot-loop vulnerability in setPermissionGrantState *(ID: [503320](https://review.lineageos.org/c/503320))*
- **[LineageOS/android_frameworks_base]** Fix a regression in ECM mode setting after package install *(ID: [503319](https://review.lineageos.org/c/503319))*
- **[LineageOS/android_frameworks_base]** SystemUi UsbDialog: fix label vulnerability *(ID: [503314](https://review.lineageos.org/c/503314))*
- **[LineageOS/android_frameworks_base]** Fix path traversal and missing ownership check in LocaleManagerService *(ID: [503313](https://review.lineageos.org/c/503313))*
- **[LineageOS/android_frameworks_av]** Fix type confusion in mediatuner service *(ID: [503300](https://review.lineageos.org/c/503300))*
- **[LineageOS/android_frameworks_av]** Fix race conditions in CryptoHal plugin usage *(ID: [503299](https://review.lineageos.org/c/503299))*
- **[LineageOS/android_frameworks_av]** Camera: Fix heap OOB read/write in camera mappers *(ID: [503298](https://review.lineageos.org/c/503298))*
- **[LineageOS/android_frameworks_av]** Fix MediaBuffer size-inflation off-by-32 bug *(ID: [503296](https://review.lineageos.org/c/503296))*
- **[LineageOS/android_external_wpa_supplicant_8]** Fix heap OOB write in Robust AV SCS Response handler *(ID: [503295](https://review.lineageos.org/c/503295))*
- **[LineageOS/android_external_wpa_supplicant_8]** Fix NAN frequency list handling in AIDL interfaces. *(ID: [503294](https://review.lineageos.org/c/503294))*

</details>

## 📱 Línea Motorola Activa (43)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_smith]** smith: Tweak status bars *(ID: [502635](https://review.lineageos.org/c/502635))*
- **[LineageOS/android_device_motorola_smith]** smith: Disable systemui falsing *(ID: [502876](https://review.lineageos.org/c/502876))*
- **[LineageOS/android_device_motorola_smith]** smith: Disable quick settings media controls *(ID: [502875](https://review.lineageos.org/c/502875))*
- **[LineageOS/android_device_motorola_smith]** smith: Improve SystemUI usability on secondary display *(ID: [502468](https://review.lineageos.org/c/502468))*
- **[LineageOS/android_device_motorola_smith]** smith: Use fold lock behavior to sleep display *(ID: [502469](https://review.lineageos.org/c/502469))*
- **[LineageOS/android_device_motorola_smith]** smith: Configure device states *(ID: [502467](https://review.lineageos.org/c/502467))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix two issues about edngss-daemon launch *(ID: [503171](https://review.lineageos.org/c/503171))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss blocked by syscall issue *(ID: [503170](https://review.lineageos.org/c/503170))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss-daemon blocked by sched_get_priority_min/max *(ID: [503169](https://review.lineageos.org/c/503169))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: minijail policy cleanup *(ID: [503168](https://review.lineageos.org/c/503168))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Add two sys calls in xtwifi-client seccomp policy file *(ID: [503167](https://review.lineageos.org/c/503167))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503166](https://review.lineageos.org/c/503166))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Inherit AIDL compatibility matrix *(ID: [502451](https://review.lineageos.org/c/502451))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Convert qspa to blueprint *(ID: [502367](https://review.lineageos.org/c/502367))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: address seccomp failures for qsap_location *(ID: [502365](https://review.lineageos.org/c/502365))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix format specifiers *(ID: [502364](https://review.lineageos.org/c/502364))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502363](https://review.lineageos.org/c/502363))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fuzzer should be using android.hardware.gnss-V4-ndk *(ID: [502362](https://review.lineageos.org/c/502362))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Convert fuzzer to blueprint *(ID: [502361](https://review.lineageos.org/c/502361))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps/location: Update to LA.VENDOR.15.4.1.r1-10300-WAIPIO.QSSI16.0 *(ID: [502360](https://review.lineageos.org/c/502360))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Update GNSS blobs from W1VAS36.62_22_16_1_9 *(ID: [502359](https://review.lineageos.org/c/502359))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix two issues about edngss-daemon launch *(ID: [503163](https://review.lineageos.org/c/503163))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss blocked by syscall issue *(ID: [503162](https://review.lineageos.org/c/503162))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by sched_get_priority_min/max *(ID: [503161](https://review.lineageos.org/c/503161))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: minijail policy cleanup *(ID: [503160](https://review.lineageos.org/c/503160))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Add two sys calls in xtwifi-client seccomp policy file *(ID: [503159](https://review.lineageos.org/c/503159))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503158](https://review.lineageos.org/c/503158))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Inherit AIDL compatibility matrix *(ID: [502460](https://review.lineageos.org/c/502460))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Convert qspa to blueprint *(ID: [502459](https://review.lineageos.org/c/502459))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: address seccomp failures for qsap_location *(ID: [502458](https://review.lineageos.org/c/502458))*

</details>

---
*Generado automáticamente por Ra Pulse*
