# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-09-19-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (134)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_oneplus_sm8750-modules]** oplus_onscreenfingerprint: notify fingerprint press on HBM property change *(ID: [503241](https://review.lineageos.org/c/503241))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Add AIDL allocator service *(ID: [503279](https://review.lineageos.org/c/503279))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Deprecate allocator 4.0 in favor of AIDL V1 *(ID: [503289](https://review.lineageos.org/c/503289))*
- **[LineageOS/android_hardware_samsung_slsi_scsc_wifibt_wpa_supplicant_lib]** wpa_supplicant_lib: Generate wpa_supplicant.conf *(ID: [502913](https://review.lineageos.org/c/502913))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Fix locking gralloc buffer *(ID: [503288](https://review.lineageos.org/c/503288))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Preserve as many error codes as possible in map/unmap paths. *(ID: [503287](https://review.lineageos.org/c/503287))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Common Mapper code should not depend on hidl *(ID: [503286](https://review.lineageos.org/c/503286))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: service: Allow allocator to inherit RT priority *(ID: [503285](https://review.lineageos.org/c/503285))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: identify CURSOR usage as DPU consumer *(ID: [503284](https://review.lineageos.org/c/503284))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Add dump for allocated gralloc buffers *(ID: [503283](https://review.lineageos.org/c/503283))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: service: rename AddServiceWithFlag with plurals (gralloc) *(ID: [503282](https://review.lineageos.org/c/503282))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: service: Set the priority to -20 in init.rc *(ID: [503281](https://review.lineageos.org/c/503281))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: allow isolated process *(ID: [503280](https://review.lineageos.org/c/503280))*
- **[LineageOS/android_packages_apps_Twelve]** Twelve: Fix search query param *(ID: [503386](https://review.lineageos.org/c/503386))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_codec2]** codec2: services: Improve Android Blueprint *(ID: [503384](https://review.lineageos.org/c/503384))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_codec2]** codec2: Drop HIDL services *(ID: [502979](https://review.lineageos.org/c/502979))*
- **[LineageOS/android_hardware_lge]** sepolicy: allow vendor_sensors to create files in sns_file *(ID: [501787](https://review.lineageos.org/c/501787))*
- **[LineageOS/android_hardware_lge]** sepolicy: add LGE specific policies from sm7250/sm8250 *(ID: [501521](https://review.lineageos.org/c/501521))*
- **[LineageOS/android_hardware_lge]** sepolicy: add initial common policies *(ID: [501497](https://review.lineageos.org/c/501497))*
- **[LineageOS/android_hardware_lge]** sepolicy: define common radio services *(ID: [501499](https://review.lineageos.org/c/501499))*
- **[LineageOS/android_hardware_lge]** sepolicy: define common NFC services *(ID: [501498](https://review.lineageos.org/c/501498))*
- **[LineageOS/android_hardware_lge]** sepolicy: allow Bluetooth HAL to search the persist directory *(ID: [501496](https://review.lineageos.org/c/501496))*
- **[LineageOS/android_hardware_lge]** lge: sepolicy: add LG Data service *(ID: [501495](https://review.lineageos.org/c/501495))*
- **[LineageOS/android_kernel_sdmc_tifa-build]** Adapt for DV9135-KVV (tifa) *(ID: [503372](https://review.lineageos.org/c/503372))*
- **[LineageOS/android_frameworks_base]** SystemUI: Internet & Bluetooth dialog fixes *(ID: [503249](https://review.lineageos.org/c/503249))*
- **[LineageOS/android_system_libufdt]** libufdt: Fix stack overflow risk in vendor qsort *(ID: [503360](https://review.lineageos.org/c/503360))*
- **[LineageOS/android_packages_services_Telephony]** Fix StackOverflowError in SatelliteEntitlementController *(ID: [503356](https://review.lineageos.org/c/503356))*
- **[LineageOS/android_packages_services_Telecomm]** Fix privilege escalation in ACTION_CALL intent trampoline *(ID: [503354](https://review.lineageos.org/c/503354))*
- **[LineageOS/android_packages_services_Telecomm]** Fix MMI check bypass via leading whitespace in tel URI. *(ID: [503353](https://review.lineageos.org/c/503353))*
- **[LineageOS/android_packages_providers_TelephonyProvider]** TelephonyProvider: Fix SQL injection in projection and sortOrder *(ID: [503352](https://review.lineageos.org/c/503352))*

</details>

## 📱 Línea Motorola Activa (44)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_exynos9610-common]** exynos9610: Switch to common wpa_supplicant.conf *(ID: [503389](https://review.lineageos.org/c/503389))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Remove disable_configstore from PRODUCT_PACKAGES *(ID: [502212](https://review.lineageos.org/c/502212))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: fastbootd is now enabled by default *(ID: [502211](https://review.lineageos.org/c/502211))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Use legacy libion implementation *(ID: [502210](https://review.lineageos.org/c/502210))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: power-libperfmgr: Update included soong namespace *(ID: [502209](https://review.lineageos.org/c/502209))*
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

</details>

---
*Generado automáticamente por Ra Pulse*
