export const tableFormDataObject = {
    "viz_type": "table",
    "datasource": "",
    "slice_id": 42,
    "url_params": {},
    "time_range_endpoints": [
        "inclusive",
        "exclusive"
    ],
    "granularity_sqla": "P_EVENT_TS",
    "time_grain_sqla": "PT1H",
    "time_range": "DATEADD(DATETIME(\"2021-09-16T00:00:00\"), -24, hour) : 2021-09-16T00:00:00",
    "query_mode": "raw",
    "groupby": [
        "M_WORKSTATION_NAME",
        "M_TARGET_CT_TIME",
        "P_DATA_TYPE",
        "P_VALUE",
        "M_WORK_ORDER_NO"
    ],
    "all_columns": [
        "M_WORKSTATION_NAME",
        "P_DATA_TYPE",
        "P_VALUE",
        "P_EVENT_TS",
        "M_PRODUCT_NAME",
        "M_PRODUCT_DESCRIPTION",
        "M_TARGET_CT_TIME",
        "M_TARGET_UPH",
        "M_WORK_ORDER_START_TIME",
        "M_WORK_ORDER_END_TIME",
        "M_WORK_ORDER_NO",
        "P_DEVICE_ID",
        "P_POS"
    ],
    "percent_metrics": [],
    "order_by_cols": [],
    "row_limit": 10000,
    "server_page_length": 10,
    "order_desc": true,
    "adhoc_filters": [
        {
            "expressionType": "SIMPLE",
            "subject": "P_DATA_TYPE",
            "operator": "IN",
            "operatorId": "IN",
            "comparator": [
                "Process Time",
                "Cycle Time"
            ],
            "clause": "WHERE",
            "sqlExpression": null,
            "isExtra": false,
            "isNew": false,
            "filterOptionName": "filter_mawvcnf4jjf_e4v5sjk2bxj"
        },
        {
            "expressionType": "SIMPLE",
            "subject": "M_WORKSTATION_NAME",
            "operator": "IN",
            "operatorId": "IN",
            "comparator": [
                "A01"
            ],
            "clause": "WHERE",
            "sqlExpression": null,
            "isExtra": false,
            "isNew": false,
            "filterOptionName": "filter_pnegf7yxd1g_3523x62uhnf"
        }
    ],
    "table_timestamp_format": "smart_date",
    "show_cell_bars": true,
    "color_pn": true,
    "extra_form_data": {}
}