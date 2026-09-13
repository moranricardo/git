# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-09-13-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (168)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_amlogic_oppen-build]** oppen: Switch to common NE defconfig fragment *(ID: [502389](https://review.lineageos.org/c/502389))*
- **[LineageOS/android_hardware_amlogic_u-boot]** net: designware: Take the PHY out of loopback after autocali *(ID: [502139](https://review.lineageos.org/c/502139))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: configs: Introduce common Amlogic defconfig and NE fragment *(ID: [502387](https://review.lineageos.org/c/502387))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps: Fix format specifiers *(ID: [502457](https://review.lineageos.org/c/502457))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502456](https://review.lineageos.org/c/502456))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix format specifiers *(ID: [502364](https://review.lineageos.org/c/502364))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502363](https://review.lineageos.org/c/502363))*
- **[LineageOS/android_hardware_interfaces]** Revert "compatibility_matrices: Allow gnss AIDL v1 on target-level 7" *(ID: [502450](https://review.lineageos.org/c/502450))*
- **[LineageOS/android_hardware_interfaces]** compatibility_matrices: Allow soundtrigger HIDL 2.1 and 2.2 on target-level 7 *(ID: [493678](https://review.lineageos.org/c/493678))*
- **[LineageOS/android_system_media]** [BACKPORT] Fix camera metadata entry capacity validation. *(ID: [502445](https://review.lineageos.org/c/502445))*
- **[LineageOS/android_system_bt]** Fix SDP server heap buffer overflow *(ID: [502444](https://review.lineageos.org/c/502444))*
- **[LineageOS/android_system_bt]** Fuzz: Fix overflow in SDP_addAttribute *(ID: [502443](https://review.lineageos.org/c/502443))*
- **[LineageOS/android_system_bt]** Fix an OOB bug in remove_sdp_record *(ID: [502442](https://review.lineageos.org/c/502442))*
- **[LineageOS/android_frameworks_av]** [BACKPORT] Fix MediaBuffer size-inflation off-by-32 bug *(ID: [502437](https://review.lineageos.org/c/502437))*
- **[LineageOS/android_frameworks_av]** Fix heap-buffer-overflow in AudioAttributes unmarshalling *(ID: [502436](https://review.lineageos.org/c/502436))*
- **[LineageOS/android_external_libhevc]** libhevcdec: Fix heap buffer overflow in ihevcd_get_tu_data_size *(ID: [502435](https://review.lineageos.org/c/502435))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: meson-g12b: Add missing eth_txen to external_eth_pins *(ID: [502041](https://review.lineageos.org/c/502041))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** x96x9: dts: Import x96x9 changes based on stock and kvim3 *(ID: [501845](https://review.lineageos.org/c/501845))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** arm64: dts: Add g12b_a311d_w400_x96x9.dts *(ID: [501844](https://review.lineageos.org/c/501844))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: Add support for radxa02 *(ID: [501423](https://review.lineageos.org/c/501423))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** [DNM] ARM64: dts: nicepool: Disable sdcard for now *(ID: [500068](https://review.lineageos.org/c/500068))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Add GPIO keypad *(ID: [500067](https://review.lineageos.org/c/500067))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Add partition files *(ID: [500066](https://review.lineageos.org/c/500066))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: nicepool: Fork from g12a_s905x2_u212 *(ID: [500065](https://review.lineageos.org/c/500065))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: Add support for deadpool *(ID: [499694](https://review.lineageos.org/c/499694))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** ARM64: dts: Add support for radxa0 *(ID: [499538](https://review.lineageos.org/c/499538))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** kvim3: dts: Configure the RTL8211F RGMII delays for the 5.15 dwmac driver *(ID: [497701](https://review.lineageos.org/c/497701))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** kvim3: dts: Drop the PDM dai-link that referenced a disabled node *(ID: [497700](https://review.lineageos.org/c/497700))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** secmon: reject bogus share mem size from legacy BL31 *(ID: [497699](https://review.lineageos.org/c/497699))*
- **[LineageOS/android_kernel_amlogic_common_drivers]** kvim3: dts: Disable legacy meson_fb, use DRM like kvim3l *(ID: [497698](https://review.lineageos.org/c/497698))*

</details>

## 📱 Línea Motorola Activa (52)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_smith]** smith: Use fold lock behavior to sleep display *(ID: [502469](https://review.lineageos.org/c/502469))*
- **[LineageOS/android_device_motorola_smith]** smith: Improve SystemUI usability on secondary display *(ID: [502468](https://review.lineageos.org/c/502468))*
- **[LineageOS/android_device_motorola_smith]** smith: Configure device states *(ID: [502467](https://review.lineageos.org/c/502467))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Inherit AIDL compatibility matrix *(ID: [502460](https://review.lineageos.org/c/502460))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Convert qspa to blueprint *(ID: [502459](https://review.lineageos.org/c/502459))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: address seccomp failures for qsap_location *(ID: [502458](https://review.lineageos.org/c/502458))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps: Fix format specifiers *(ID: [502457](https://review.lineageos.org/c/502457))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502456](https://review.lineageos.org/c/502456))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps: Fuzzer should be using android.hardware.gnss-V4-ndk *(ID: [502455](https://review.lineageos.org/c/502455))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps: Convert fuzzer to blueprint *(ID: [502454](https://review.lineageos.org/c/502454))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm7435-common: gps/location: Update to LA.VENDOR.15.4.1.r1-10300-WAIPIO.QSSI16.0 *(ID: [502453](https://review.lineageos.org/c/502453))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Update GNSS blobs from W1VAS36.62_22_16_1_9 *(ID: [502452](https://review.lineageos.org/c/502452))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Convert qspa to blueprint *(ID: [502367](https://review.lineageos.org/c/502367))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: address seccomp failures for qsap_location *(ID: [502365](https://review.lineageos.org/c/502365))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix format specifiers *(ID: [502364](https://review.lineageos.org/c/502364))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502363](https://review.lineageos.org/c/502363))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fuzzer should be using android.hardware.gnss-V4-ndk *(ID: [502362](https://review.lineageos.org/c/502362))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Convert fuzzer to blueprint *(ID: [502361](https://review.lineageos.org/c/502361))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps/location: Update to LA.VENDOR.15.4.1.r1-10300-WAIPIO.QSSI16.0 *(ID: [502360](https://review.lineageos.org/c/502360))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Update GNSS blobs from W1VAS36.62_22_16_1_9 *(ID: [502359](https://review.lineageos.org/c/502359))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Inherit AIDL compatibility matrix *(ID: [502451](https://review.lineageos.org/c/502451))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Update WFD system blobs from marvel_g A171WEH.20 *(ID: [499945](https://review.lineageos.org/c/499945))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: power-libperfmgr: Update included soong namespaces *(ID: [497049](https://review.lineageos.org/c/497049))*
- **[LineageOS/android_device_motorola_sm7250-common]** fixup! sm7250-common: Drop unused packages *(ID: [502213](https://review.lineageos.org/c/502213))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Remove disable_configstore from PRODUCT_PACKAGES *(ID: [502212](https://review.lineageos.org/c/502212))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: fastbootd is now enabled by default *(ID: [502211](https://review.lineageos.org/c/502211))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: Use legacy libion implementation *(ID: [502210](https://review.lineageos.org/c/502210))*
- **[LineageOS/android_device_motorola_sm7250-common]** sm7250-common: power-libperfmgr: Update included soong namespace *(ID: [502209](https://review.lineageos.org/c/502209))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Default to modules blocklist files from kernel source *(ID: [501230](https://review.lineageos.org/c/501230))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Update ims.apk patches *(ID: [501004](https://review.lineageos.org/c/501004))*

</details>

---
*Generado automáticamente por Ra Pulse*
