# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-23-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (373)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_motorola]** motorola: Add MotoActiveSimSwitch *(ID: [509656](https://review.lineageos.org/c/509656))*
- **[LineageOS/android_hardware_qcom_display]** composer: Update getDisplayConfigurations API *(ID: [509789](https://review.lineageos.org/c/509789))*
- **[LineageOS/android_kernel_ayn_qcs8550-modules]** touch: hynitron: Initialize input_dev pointer before registration *(ID: [509704](https://review.lineageos.org/c/509704))*
- **[LineageOS/android_kernel_ayn_qcs8550-modules]** touch: hynitron: Clean up multi-touch Protocol B reporting *(ID: [509609](https://review.lineageos.org/c/509609))*
- **[LineageOS/android_kernel_ayn_qcs8550-modules]** touch: hynitron: Increase post-reset delay on probe and resume *(ID: [509603](https://review.lineageos.org/c/509603))*
- **[LineageOS/android_kernel_ayn_qcs8550-modules]** ayn-miniled: Clean up I2C write retry loop and suppress error spam *(ID: [509602](https://review.lineageos.org/c/509602))*
- **[LineageOS/android_hardware_lineage_interfaces]** fingerprint: aidl: Allow customizing the per-user store path *(ID: [509714](https://review.lineageos.org/c/509714))*
- **[LineageOS/android_hardware_lineage_interfaces]** fingerprint: aidl: Log sensor id in getSensorProps *(ID: [509713](https://review.lineageos.org/c/509713))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** cnss2: Add NULL checks for FW allocated cal_mem *(ID: [509770](https://review.lineageos.org/c/509770))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** kgsl: Prevent bind to VBO entries pending free in deferred worker *(ID: [509769](https://review.lineageos.org/c/509769))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** kgsl: Reject mmap from processes with a different mm *(ID: [509768](https://review.lineageos.org/c/509768))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** kgsl: bail on vm_open if refcount is zero *(ID: [509767](https://review.lineageos.org/c/509767))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** kgsl: Validate set_draw_state packet size before parsing *(ID: [509766](https://review.lineageos.org/c/509766))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** input: goodix: use strscpy for fixed-size DT strings *(ID: [509765](https://review.lineageos.org/c/509765))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** input: novatek: check SPI DMA buffer capacities *(ID: [509764](https://review.lineageos.org/c/509764))*
- **[LineageOS/android_kernel_xiaomi_sm8450]** input: novatek: bound SPI proc transfer before memcpy *(ID: [509763](https://review.lineageos.org/c/509763))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** video: vidc: initialize fence before qbuf error cleanup *(ID: [509787](https://review.lineageos.org/c/509787))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** media: vidc: validate SFR size before terminating FW message *(ID: [509786](https://review.lineageos.org/c/509786))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** media: vidc: guard missing/empty allowed clock tables *(ID: [509785](https://review.lineageos.org/c/509785))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** datarmnet: fix priority-ordered DL indicator registration *(ID: [509784](https://review.lineageos.org/c/509784))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** datarmnet: handle unallocated descriptor pool during teardown *(ID: [509783](https://review.lineageos.org/c/509783))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** datarmnet: include MUX 0 endpoints during forced unassociation *(ID: [509782](https://review.lineageos.org/c/509782))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** datarmnet: retain active power-save format on netlink updates *(ID: [509781](https://review.lineageos.org/c/509781))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** datarmnet: release RX handler and netdev ref on descriptor init failure *(ID: [509780](https://review.lineageos.org/c/509780))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** qcacmn: Validate vdev count before CSA switch count update *(ID: [509779](https://review.lineageos.org/c/509779))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** qcacmn: Fix out-of-bounds read in roam scan AP stats *(ID: [509778](https://review.lineageos.org/c/509778))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** qcacld-3.0: Add buffer overflow check in wma_fill_rx_stats *(ID: [509777](https://review.lineageos.org/c/509777))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** qcacld-3.0: Fix slab-out-of-bounds in HW mode transition *(ID: [509776](https://review.lineageos.org/c/509776))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** qcacmn: Fix buffer overflow in fragment processing *(ID: [509775](https://review.lineageos.org/c/509775))*
- **[LineageOS/android_kernel_xiaomi_sm8450-modules]** dataipa: avoid redundant assertion after IPA device crash *(ID: [509774](https://review.lineageos.org/c/509774))*

</details>

## 📱 Línea Motorola Activa (13)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_hardware_motorola]** motorola: Add MotoActiveSimSwitch *(ID: [509656](https://review.lineageos.org/c/509656))*
- **[LineageOS/android_device_motorola_smith]** smith: Enable switching between eSIM and pSIM *(ID: [509760](https://review.lineageos.org/c/509760))*
- **[LineageOS/android_device_motorola_smith]** smith: Add eUICC support *(ID: [509314](https://review.lineageos.org/c/509314))*
- **[LineageOS/android_device_motorola_fogos]** fogos: Migrate to MotoEuicc *(ID: [468416](https://review.lineageos.org/c/468416))*
- **[LineageOS/android_device_motorola_fogo]** fogo: Migrate to MotoEuicc *(ID: [468415](https://review.lineageos.org/c/468415))*
- **[LineageOS/android_device_motorola_bangkk]** bangkk: Migrate to MotoEuicc *(ID: [468414](https://review.lineageos.org/c/468414))*
- **[LineageOS/android_device_motorola_milanf]** milanf: audio: Add missing Fluence NN mixer paths *(ID: [509729](https://review.lineageos.org/c/509729))*
- **[LineageOS/android_device_motorola_rhodep]** rhodep: audio: Add missing Fluence NN mixer paths *(ID: [509730](https://review.lineageos.org/c/509730))*
- **[LineageOS/android_device_motorola_denver]** denver: audio: Add missing Fluence NN mixer paths *(ID: [509727](https://review.lineageos.org/c/509727))*
- **[LineageOS/android_device_motorola_ibiza]** ibiza: audio: Add missing Fluence NN mixer paths *(ID: [509728](https://review.lineageos.org/c/509728))*
- **[LineageOS/android_device_motorola_sm7325-common]** sm7325-common: Ship Motorola face unlock *(ID: [508370](https://review.lineageos.org/c/508370))*
- **[LineageOS/android_device_motorola_sm7325-common]** sm7325-common: Inherit common motorola FCM *(ID: [508369](https://review.lineageos.org/c/508369))*
- **[LineageOS/android_hardware_motorola]** motorola: aidl: face: Add face unlock HAL wrapper *(ID: [509512](https://review.lineageos.org/c/509512))*

</details>

---
*Generado automáticamente por Ra Pulse*
