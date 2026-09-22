# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-09-22-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (190)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_samsung_slsi-linaro_codec2]** codec2: services: Cleanup Android.bp *(ID: [503384](https://review.lineageos.org/c/503384))*
- **[LineageOS/android_kernel_qcom_sm8850]** ARM64: dts: vendor: Add symlink to sm8850-devicetrees *(ID: [503888](https://review.lineageos.org/c/503888))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** qcom: wlan: icnss2: Add Nord 6 project IDs *(ID: [503157](https://review.lineageos.org/c/503157))*
- **[LineageOS/android_hardware_interfaces]** Revert "compatibility_matrices: Allow gnss AIDL v1 on target-level 7" *(ID: [502450](https://review.lineageos.org/c/502450))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix two issues about edngss-daemon launch *(ID: [503163](https://review.lineageos.org/c/503163))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss blocked by syscall issue *(ID: [503162](https://review.lineageos.org/c/503162))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by sched_get_priority_min/max *(ID: [503161](https://review.lineageos.org/c/503161))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503158](https://review.lineageos.org/c/503158))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fix format specifiers *(ID: [502457](https://review.lineageos.org/c/502457))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fix unqualified-std-cast-call warning *(ID: [502456](https://review.lineageos.org/c/502456))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503166](https://review.lineageos.org/c/503166))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix format specifiers *(ID: [502364](https://review.lineageos.org/c/502364))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502363](https://review.lineageos.org/c/502363))*
- **[LineageOS/android_device_oneplus_sm8850-common]** sm8850-common: Fix issue that daemons cannot be pushed to device *(ID: [504088](https://review.lineageos.org/c/504088))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** treewide: Use soc repo unconditionally *(ID: [503897](https://review.lineageos.org/c/503897))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** build: bazel: replace hardcoded module paths with shared helpers *(ID: [503895](https://review.lineageos.org/c/503895))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** BUILD: DDK: copy_to_dist to pkg_install *(ID: [503901](https://review.lineageos.org/c/503901))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** qcom: camera: Select project config from target *(ID: [503900](https://review.lineageos.org/c/503900))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** qcom: Expose modules to the soc kernel *(ID: [503899](https://review.lineageos.org/c/503899))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** qcom: securemsm: Expose SMMU proxy UAPI headers *(ID: [503898](https://review.lineageos.org/c/503898))*
- **[LineageOS/android_kernel_qcom_sm8850-modules]** build: Update kernel and module paths *(ID: [503896](https://review.lineageos.org/c/503896))*
- **[LineageOS/android_kernel_qcom_sm8850]** build: bazel: Don't hardcode path to current repo *(ID: [503924](https://review.lineageos.org/c/503924))*
- **[LineageOS/android_kernel_qcom_sm8850]** BUILD: DDK: copy_to_dist to pkg_install *(ID: [503894](https://review.lineageos.org/c/503894))*
- **[LineageOS/android_kernel_qcom_sm8850]** build: Include techpack UAPI headers in the headers dist *(ID: [503892](https://review.lineageos.org/c/503892))*
- **[LineageOS/android_kernel_qcom_sm8850]** build: bazel: Populate techpack module packaging rules *(ID: [503891](https://review.lineageos.org/c/503891))*
- **[LineageOS/android_kernel_qcom_sm8850]** build: bazel: Fix GKI module packaging *(ID: [503890](https://review.lineageos.org/c/503890))*
- **[LineageOS/android_kernel_qcom_sm8850]** build: bazel: Append unsafe headers to DDK modules if allowed *(ID: [503889](https://review.lineageos.org/c/503889))*
- **[LineageOS/android_kernel_qcom_sm8850-devicetrees]** Makefile: Silence DTC warnings by default *(ID: [504081](https://review.lineageos.org/c/504081))*
- **[LineageOS/android_kernel_qcom_sm8850-devicetrees]** qcom: fingerprint/wlan: Remove standalone Bazel package *(ID: [503905](https://review.lineageos.org/c/503905))*
- **[LineageOS/android_kernel_qcom_sm8850-devicetrees]** qcom: Build dtbos inline *(ID: [503903](https://review.lineageos.org/c/503903))*

</details>

## 📱 Línea Motorola Activa (27)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix two issues about edngss-daemon launch *(ID: [503163](https://review.lineageos.org/c/503163))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss blocked by syscall issue *(ID: [503162](https://review.lineageos.org/c/503162))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by sched_get_priority_min/max *(ID: [503161](https://review.lineageos.org/c/503161))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: minijail policy cleanup *(ID: [503160](https://review.lineageos.org/c/503160))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Add two sys calls in xtwifi-client seccomp policy file *(ID: [503159](https://review.lineageos.org/c/503159))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503158](https://review.lineageos.org/c/503158))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Inherit AIDL compatibility matrix *(ID: [502460](https://review.lineageos.org/c/502460))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Convert qspa to blueprint *(ID: [502459](https://review.lineageos.org/c/502459))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: address seccomp failures for qsap_location *(ID: [502458](https://review.lineageos.org/c/502458))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fix format specifiers *(ID: [502457](https://review.lineageos.org/c/502457))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fix unqualified-std-cast-call warning *(ID: [502456](https://review.lineageos.org/c/502456))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fuzzer should be using android.hardware.gnss-V4-ndk *(ID: [502455](https://review.lineageos.org/c/502455))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Convert fuzzer to blueprint *(ID: [502454](https://review.lineageos.org/c/502454))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps/location: Update to LA.VENDOR.15.4.1.r1-10300-WAIPIO.QSSI16.0 *(ID: [502453](https://review.lineageos.org/c/502453))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Update GNSS blobs from W1VAS36.62_22_16_1_9 *(ID: [502452](https://review.lineageos.org/c/502452))*
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

</details>

---
*Generado automáticamente por Ra Pulse*
