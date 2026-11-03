# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-03-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (215)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_ayn]** sepolicy: Label qc7790s uart wakeup node *(ID: [511810](https://review.lineageos.org/c/511810))*
- **[LineageOS/android_device_amlogic_g12-common]** g12: Fix voldmanaged USB glob for the Amlogic xHCI name *(ID: [496038](https://review.lineageos.org/c/496038))*
- **[LineageOS/android_kernel_oneplus_sm8350]** Revert "HACK: binder: Disable freeze related ioctls" *(ID: [511851](https://review.lineageos.org/c/511851))*
- **[LineageOS/android_kernel_fairphone_sm7635]** Merge remote-tracking branch 'sm8650/lineage-22.2' into lineage-23.2 *(ID: [511850](https://review.lineageos.org/c/511850))*
- **[LineageOS/android_kernel_qcom_sm8350]** UPSTREAM: posix-cpu-timers: Prevent UAF caused by non-leader exec() race *(ID: [511846](https://review.lineageos.org/c/511846))*
- **[LineageOS/android_kernel_qcom_sm8250]** BACKPORT: ANDROID: 16K: skip fault-around in ELF segment padding holes *(ID: [511848](https://review.lineageos.org/c/511848))*
- **[LineageOS/android_kernel_qcom_sm8250]** FROMGIT: HID: core: Fix OOB read in hid_get_report for numbered reports *(ID: [511847](https://review.lineageos.org/c/511847))*
- **[LineageOS/android_kernel_qcom_sm8350]** UPSTREAM: posix-cpu-timers: Fix rearm racing against process tick *(ID: [511845](https://review.lineageos.org/c/511845))*
- **[LineageOS/android_kernel_qcom_sm8350]** UPSTREAM: posix-cpu-timers: Store a reference to a pid not a task *(ID: [511844](https://review.lineageos.org/c/511844))*
- **[LineageOS/android_kernel_qcom_sm8350]** UPSTREAM: posix-cpu-timers: Remove unnecessary locking around cpu_clock_sample_group *(ID: [511843](https://review.lineageos.org/c/511843))*
- **[LineageOS/android_kernel_qcom_sm8350]** FROMGIT: HID: logitech-dj: fix wrong detection of bad DJ_SHORT output report *(ID: [511842](https://review.lineageos.org/c/511842))*
- **[LineageOS/android_kernel_qcom_sm8350]** FROMGIT: HID: logitech-dj: Prevent REPORT_ID_DJ_SHORT related user initiated OOB write *(ID: [511841](https://review.lineageos.org/c/511841))*
- **[LineageOS/android_kernel_qcom_sm8350]** FROMGIT: HID: logitech-dj: Standardise hid_report_enum variable nomenclature *(ID: [511840](https://review.lineageos.org/c/511840))*
- **[LineageOS/android_kernel_qcom_sm8350]** FROMGIT: nfc: llcp: Fix use-after-free race in nfc_llcp_recv_cc() *(ID: [511839](https://review.lineageos.org/c/511839))*
- **[LineageOS/android_kernel_qcom_sm8350]** FROMGIT: nfc: llcp: Fix use-after-free in llcp_sock_release() *(ID: [511838](https://review.lineageos.org/c/511838))*
- **[LineageOS/android_kernel_qcom_sm8350]** ANDROID: 16K: skip fault-around in ELF segment padding holes *(ID: [511837](https://review.lineageos.org/c/511837))*
- **[LineageOS/android_kernel_qcom_sm8350]** ANDROID: 16K: improve robustness of vma padding logic *(ID: [511836](https://review.lineageos.org/c/511836))*
- **[LineageOS/android_kernel_qcom_sm8350]** FROMGIT: HID: core: Fix OOB read in hid_get_report for numbered reports *(ID: [511835](https://review.lineageos.org/c/511835))*
- **[LineageOS/android_kernel_qcom_sm8350]** UPSTREAM: Bluetooth: RFCOMM: hold listener socket in rfcomm_connect_ind() *(ID: [511834](https://review.lineageos.org/c/511834))*
- **[LineageOS/android_frameworks_base]** Fix BAL bypass via pinned windows in SDK sandbox and PCC *(ID: [511831](https://review.lineageos.org/c/511831))*
- **[LineageOS/android_frameworks_base]** Fix BAL bypass in RemoteViews SetRadioGroupCheckedAction reapply *(ID: [511828](https://review.lineageos.org/c/511828))*
- **[LineageOS/android_hardware_nxp_nfc]** Fix infinite loop and logcat spam in NXP NFC HAL teardown *(ID: [508039](https://review.lineageos.org/c/508039))*
- **[LineageOS/android_hardware_nxp_nfc]** Fix heap use-after-free in NXP NFC HAL *(ID: [508038](https://review.lineageos.org/c/508038))*
- **[LineageOS/android_hardware_interfaces]** Add model input/output out-of-bounds validation tests *(ID: [508037](https://review.lineageos.org/c/508037))*
- **[LineageOS/android_hardware_interfaces]** Fix CAS HAL integer truncation vulnerability *(ID: [508036](https://review.lineageos.org/c/508036))*
- **[LineageOS/android_frameworks_opt_telephony]** ImsPhone: Catch RuntimeException and fix P-Associated-URI parse *(ID: [508034](https://review.lineageos.org/c/508034))*
- **[LineageOS/android_frameworks_opt_telephony]** Fix RCS config credential leak via ISub *(ID: [508033](https://review.lineageos.org/c/508033))*
- **[LineageOS/android_kernel_qcom_sm8450]** Merge branch 'android12-5.10-lts' of https://android.googlesource.com/kernel/common into android13-5.10-waipio *(ID: [511798](https://review.lineageos.org/c/511798))*
- **[LineageOS/android_kernel_motorola_sm8475]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-24.0 *(ID: [511818](https://review.lineageos.org/c/511818))*
- **[LineageOS/android_kernel_motorola_sm7435]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-23.2 *(ID: [511817](https://review.lineageos.org/c/511817))*

</details>

## 📱 Línea Motorola Activa (11)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_fogos]** fogos: Add missing camera libraries *(ID: [511833](https://review.lineageos.org/c/511833))*
- **[LineageOS/android_device_motorola_fogo]** fogo: Add missing camera libraries *(ID: [511826](https://review.lineageos.org/c/511826))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Add missing camera libraries *(ID: [511622](https://review.lineageos.org/c/511622))*
- **[LineageOS/android_device_motorola_rhodep]** rhodep: Add missing camera libraries *(ID: [511625](https://review.lineageos.org/c/511625))*
- **[LineageOS/android_device_motorola_miami]** miami: Add missing camera libraries *(ID: [511618](https://review.lineageos.org/c/511618))*
- **[LineageOS/android_device_motorola_fogos]** fogos: Add missing anc blobs for camera *(ID: [511615](https://review.lineageos.org/c/511615))*
- **[LineageOS/android_kernel_motorola_sm8475]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-24.0 *(ID: [511818](https://review.lineageos.org/c/511818))*
- **[LineageOS/android_kernel_motorola_sm7435]** Merge remote-tracking branch 'qcom/lineage-20' into lineage-23.2 *(ID: [511817](https://review.lineageos.org/c/511817))*
- **[LineageOS/android_device_motorola_fogo]** fogo: Add missing anc blobs for camera *(ID: [511613](https://review.lineageos.org/c/511613))*
- **[LineageOS/android_device_motorola_bangkk]** bangkk: Add missing camera libraries *(ID: [511608](https://review.lineageos.org/c/511608))*
- **[LineageOS/android_device_motorola_bangkk]** bangkk: Add missing anc blobs for camera *(ID: [511607](https://review.lineageos.org/c/511607))*

</details>

---
*Generado automáticamente por Ra Pulse*
